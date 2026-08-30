import React, { useEffect, useRef, useState } from "react";
import { useConversionFlow, StartAnswers } from "@/contexts/ConversionFlowContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const maxStep = 6;

const optionClass = "border border-border rounded-lg p-4 text-left w-full cursor-pointer min-h-[44px] flex items-center";

const StartProjectFlow = () => {
  const { mode, isOpen, close, startState } = useConversionFlow();
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && mode === "start") {
      setTimeout(() => panelRef.current?.focus(), 50);
    }
  }, [isOpen, mode]);

  if (!isOpen || mode !== "start" || !startState) return null;

  const { step, answers, setAnswer, next, back, submit } = startState;

  const setAndNext = (k: keyof StartAnswers, v: unknown) => {
    setAnswer(k, v);
    next();
  };

  const canNext = () => {
    // basic per-step validation
    if (step === 1) return !!answers.need;
    if (step === 2) return !!answers.businessType;
    if (step === 3) return !!answers.hasWebsite;
    if (step === 4) return !!answers.goals && answers.goals.length > 0;
    if (step === 5) return !!answers.startWhen;
    if (step === 6) return !!answers.name && !!answers.email;
    return true;
  };

  const onSubmit = async () => {
    setSubmitting(true);
    const res = await submit();
    setSubmitting(false);
    if (res.ok) {
      close();
      alert(`Thanks, ${answers.name || "there"}. I’ll review your answers and get back to you shortly.`);
    } else {
      // preserve form and show error so user can retry
      const msg =
        res.message ||
        `Submission failed or backend not configured. Your answers are still here — please try again or contact us directly.`;
      alert(msg);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-project-title"
      tabIndex={-1}
      ref={panelRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="absolute inset-0 bg-black/40" onClick={() => close()} />
      <div className="relative w-full max-w-2xl bg-card rounded-2xl shadow-lg p-6 sm:p-8" style={{ maxHeight: "95vh", overflow: "auto" }}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 id="start-project-title" className="text-2xl font-bold">
              {t("flow.start.title")}
            </h2>
            <p className="text-sm text-muted-foreground">{t("flow.start.subtitle")}</p>
          </div>
          <div className="text-sm text-muted-foreground">{step} of {maxStep}</div>
        </div>

        {/* Step content */}
        <div className="space-y-4">
          {step === 1 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step1.question")}</p>
              <div className="grid gap-3">
                <button className={optionClass} onClick={() => setAndNext("need", "new_website")}>
                  {t("flow.start.step1.options.newWebsite")}
                </button>
                <button className={optionClass} onClick={() => setAndNext("need", "improve")}>{t("flow.start.step1.options.improve")}</button>
                <button className={optionClass} onClick={() => setAndNext("need", "unsure")}>{t("flow.start.step1.options.unsure")}</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step2.question")}</p>
              <div className="grid gap-3">
                {[
                  ["hair_salon", t("flow.start.step2.options.hairSalon")],
                  ["hairstylist", t("flow.start.step2.options.hairstylist")],
                  ["barber", t("flow.start.step2.options.barber")],
                  ["beauty", t("flow.start.step2.options.beauty")],
                  ["other", t("flow.start.step2.options.other")],
                ].map(([k, label]) => (
                  <button key={String(k)} className={optionClass} onClick={() => setAndNext("businessType", k)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step3.question")}</p>
              <div className="grid gap-3">
                <button className={optionClass} onClick={() => setAndNext("hasWebsite", "yes")}>
                  {t("flow.start.step3.options.yes")}
                </button>
                <button className={optionClass} onClick={() => setAndNext("hasWebsite", "no")}>{t("flow.start.step3.options.no")}</button>
              </div>
              {answers.hasWebsite === "yes" && (
                <div className="mt-3">
                  <label className="text-sm">{t("flow.start.step3.websiteLabel")}</label>
                  <input
                    className="mt-2 w-full rounded-md border px-3 py-2"
                    type="url"
                    placeholder="https://"
                    value={answers.websiteUrl || ""}
                    onChange={(e) => setAnswer("websiteUrl", e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step4.question")}</p>
              <div className="grid gap-2">
                {[
                  ["bookings", t("flow.start.step4.options.bookings")],
                  ["enquiries", t("flow.start.step4.options.enquiries")],
                  ["professional", t("flow.start.step4.options.professional")],
                  ["google", t("flow.start.step4.options.google")],
                  ["promote", t("flow.start.step4.options.promote")],
                  ["other", t("flow.start.step4.options.other")],
                ].map(([k, label]) => (
                  <label key={String(k)} className={cn(optionClass, "flex items-center gap-3")}>
                    <input
                      type="checkbox"
                      checked={(answers.goals || []).includes(String(k))}
                      onChange={(e) => {
                        const set = new Set(answers.goals || []);
                        if (e.target.checked) set.add(String(k));
                        else set.delete(String(k));
                        setAnswer("goals", Array.from(set));
                      }}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step5.question")}</p>
              <div className="grid gap-3">
                {[
                  ["asap", t("flow.start.step5.options.asap")],
                  ["month", t("flow.start.step5.options.month")],
                  ["1-3", t("flow.start.step5.options.q1-3")],
                  ["explore", t("flow.start.step5.options.explore")],
                ].map(([k, label]) => (
                  <button key={String(k)} className={optionClass} onClick={() => setAndNext("startWhen", k)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <p className="mb-3 text-base">{t("flow.start.step6.question")}</p>
              <div className="grid gap-3">
                <input
                  aria-label={t("flow.start.step6.name")}
                  placeholder={t("flow.start.step6.name")}
                  className="rounded-md border px-3 py-2"
                  value={answers.name || ""}
                  onChange={(e) => setAnswer("name", e.target.value)}
                />
                <input
                  aria-label={t("flow.start.step6.email")}
                  placeholder={t("flow.start.step6.email")}
                  className="rounded-md border px-3 py-2"
                  value={answers.email || ""}
                  onChange={(e) => setAnswer("email", e.target.value)}
                />
                <input
                  aria-label={t("flow.start.step6.phone")}
                  placeholder={t("flow.start.step6.phone")}
                  className="rounded-md border px-3 py-2"
                  value={answers.phone || ""}
                  onChange={(e) => setAnswer("phone", e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            {step > 1 && (
              <button onClick={back} className="text-sm text-muted-foreground underline">
                {t("flow.common.back")}
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            {step < maxStep && (
              <Button disabled={!canNext()} onClick={next} variant="outline">
                {t("flow.common.next")}
              </Button>
            )}
            {step === maxStep && (
              <Button onClick={onSubmit} disabled={!canNext() || submitting}>
                {submitting ? t("flow.common.sending") : t("flow.start.submit")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProjectFlow;
