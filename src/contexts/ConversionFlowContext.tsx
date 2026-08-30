import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export type StartAnswers = {
  need?: string;
  businessType?: string;
  hasWebsite?: string;
  websiteUrl?: string;
  goals?: string[];
  startWhen?: string;
  name?: string;
  email?: string;
  phone?: string;
};

export type FreeReviewAnswers = {
  websiteUrl?: string;
  goal?: string;
  name?: string;
  email?: string;
};

type ConversionFlowContextType = {
  openStart: () => void;
  openFreeReview: () => void;
  close: () => void;
  isOpen: boolean;
  mode: "start" | "freeReview" | null;
  startState: {
    step: number;
    answers: StartAnswers;
    setAnswer: (k: keyof StartAnswers, v: unknown) => void;
    next: () => void;
    back: () => void;
    submit: () => Promise<{ ok: boolean; message?: string }>;
  } | null;
  freeReviewState: {
    step: number;
    answers: FreeReviewAnswers;
    setAnswer: (k: keyof FreeReviewAnswers, v: unknown) => void;
    next: () => void;
    back: () => void;
    submit: () => Promise<{ ok: boolean; message?: string }>;
  } | null;
};

const ConversionFlowContext = createContext<ConversionFlowContextType | undefined>(undefined);

export const ConversionFlowProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"start" | "freeReview" | null>(null);

  // Start project state
  const [startStep, setStartStep] = useState(1);
  const [startAnswers, setStartAnswers] = useState<StartAnswers>({});

  // Free review state
  const [freeStep, setFreeStep] = useState(1);
  const [freeAnswers, setFreeAnswers] = useState<FreeReviewAnswers>({});

  const openStart = () => {
    setMode("start");
    setIsOpen(true);
    setStartStep(1);
  };
  const openFreeReview = () => {
    setMode("freeReview");
    setIsOpen(true);
    setFreeStep(1);
  };
  const close = () => {
    setIsOpen(false);
    setMode(null);
  };

  const setStartAnswer = (k: keyof StartAnswers, v: unknown) =>
    setStartAnswers((s) => ({ ...s, [k]: v }));
  const setFreeAnswer = (k: keyof FreeReviewAnswers, v: unknown) =>
    setFreeAnswers((s) => ({ ...s, [k]: v }));

  const nextStart = () => setStartStep((s) => Math.min(6, s + 1));
  const backStart = () => setStartStep((s) => Math.max(1, s - 1));

  const nextFree = () => setFreeStep((s) => Math.min(3, s + 1));
  const backFree = () => setFreeStep((s) => Math.max(1, s - 1));

  // submission architecture
  const SUBMIT_ENDPOINT = (import.meta.env.VITE_SUBMIT_ENDPOINT as string) || "";

  const postPayload = async (payload: unknown) => {
    const res = await fetch(SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload as Record<string, unknown>),
    });
    if (!res.ok) {
      // try to extract server message
      let text = "Server returned an error.";
      try {
        const json = (await res.json()) as Record<string, unknown> | undefined;
        if (json && typeof json.error === "string") text = json.error;
        else if (json && typeof json.message === "string") text = json.message;
      } catch (_: unknown) {
        // ignore JSON parse errors
        try {
          text = await res.text();
        } catch (_: unknown) {
          // ignore
        }
      }
      throw new Error(text || "Submission failed");
    }
    return true;
  };

  const submitStart = async (): Promise<{ ok: boolean; message?: string }> => {
    const payload = {
      type: "start_project",
      timestamp: new Date().toISOString(),
      answers: startAnswers,
    };
    if (!SUBMIT_ENDPOINT) {
      return { ok: false, message: "Submission endpoint is not configured." };
    }

    try {
      await postPayload(payload);
      return { ok: true };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed";
      return { ok: false, message };
    }
  };

  const submitFree = async (): Promise<{ ok: boolean; message?: string }> => {
    const payload = {
      type: "free_review",
      timestamp: new Date().toISOString(),
      answers: freeAnswers,
    };
    if (!SUBMIT_ENDPOINT) {
      return { ok: false, message: "Submission endpoint is not configured." };
    }

    try {
      await postPayload(payload);
      return { ok: true };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed";
      return { ok: false, message };
    }
  };

  const value: ConversionFlowContextType = {
    openStart,
    openFreeReview,
    close,
    isOpen,
    mode,
    startState: {
      step: startStep,
      answers: startAnswers,
      setAnswer: setStartAnswer,
      next: nextStart,
      back: backStart,
      submit: submitStart,
    },
    freeReviewState: {
      step: freeStep,
      answers: freeAnswers,
      setAnswer: setFreeAnswer,
      next: nextFree,
      back: backFree,
      submit: submitFree,
    },
  };

  return <ConversionFlowContext.Provider value={value}>{children}</ConversionFlowContext.Provider>;
};

export const useConversionFlow = () => {
  const ctx = useContext(ConversionFlowContext);
  if (!ctx) throw new Error("useConversionFlow must be used within ConversionFlowProvider");
  return ctx;
};
