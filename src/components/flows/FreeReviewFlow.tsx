import React, { useEffect, useRef, useState } from "react";
import { useConversionFlow } from "@/contexts/ConversionFlowContext";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const optionClass = "border border-border rounded-lg p-3 transition-transform transition-colors";

const FreeReviewFlow = () => {
  const { mode, isOpen, close, freeReviewState } = useConversionFlow();
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && mode === "freeReview") setTimeout(() => panelRef.current?.focus(), 50);
  }, [isOpen, mode]);

  if (!isOpen || mode !== "freeReview" || !freeReviewState) return null;

  const { step, answers, setAnswer, next, back, submit } = freeReviewState;

  const canNext = () => {
    if (step === 1) return !!answers.websiteUrl && /^https?:\/\//i.test(answers.websiteUrl || "");
    if (step === 2) return !!answers.goal;
    if (step === 3) return !!answers.name && !!answers.email;
    return true;
  };

  const onSubmit = async () => {
    setSubmitting(true);
    const res = await submit();
    setSubmitting(false);
    if (res.ok) {
      close();
      toast({ title: `Thanks, ${answers.name || "there"}.`, description: t("flow.free.successDescription") });
    } else {
      const msg = res.message || "Submission failed or backend not configured. Your answers are still here — please try again.";
      toast({ title: t("flow.common.errorTitle"), description: msg, variant: "destructive" });
    }
  };

  return (
    <div role="dialog" aria-modal="true" tabIndex={-1} ref={panelRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-black/40" onClick={() => close()} />
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-lg p-6 sm:p-8" style={{ maxHeight: "95vh", overflow: "auto" }}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{t("flow.free.title")}</h2>
            <p className="text-sm text-muted-foreground">{t("flow.free.subtitle")}</p>
          </div>
          <div className="text-sm text-muted-foreground">{step} of 3</div>
        </div>

        <div className="space-y-4">
          {step === 1 && (
            <div>
              <p className="mb-3 text-base">{t("flow.free.step1.question")}</p>
              <input
                className="w-full rounded-md border px-3 py-2"
                placeholder="https://"
                value={answers.websiteUrl || ""}
                onChange={(e) => setAnswer("websiteUrl", e.target.value)}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="mb-3 text-base">{t("flow.free.step2.question")}</p>
              <div className="grid gap-3">
                {[
                  ["bookings", t("flow.free.step2.options.bookings")],
                  ["enquiries", t("flow.free.step2.options.enquiries")],
                  ["professional", t("flow.free.step2.options.professional")],
                  ["google", t("flow.free.step2.options.google")],
                  ["unsure", t("flow.free.step2.options.unsure")],
                ].map(([k, label]) => (
                  <button
                    key={String(k)}
                    className={cn(optionClass, answers.goal === k ? "border-primary bg-primary/5 scale-101" : "hover:scale-102")}
                    onClick={() => setAnswer("goal", k)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="mb-3 text-base">{t("flow.free.step3.question")}</p>
              <input
                className="w-full rounded-md border px-3 py-2 mb-2"
                placeholder={t("flow.free.step3.namePlaceholder")}
                value={answers.name || ""}
                onChange={(e) => setAnswer("name", e.target.value)}
              />
              <input
                className="w-full rounded-md border px-3 py-2"
                placeholder={t("flow.free.step3.emailPlaceholder")}
                value={answers.email || ""}
                onChange={(e) => setAnswer("email", e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>{step > 1 && <button onClick={back} className="text-sm text-muted-foreground underline">{t("flow.common.back")}</button>}</div>
          <div>
            {step < 3 && (
              <Button onClick={next} disabled={!canNext()} variant="outline">
                {t("flow.common.next")}
              </Button>
            )}
            {step === 3 && (
              <Button onClick={onSubmit} disabled={!canNext() || submitting}>{submitting ? t("flow.common.sending") : t("flow.free.submit")}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeReviewFlow;
