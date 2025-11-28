// src/components/LanguageToggle.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

// Adjust the "code" values to match your useLanguage implementation.
// Here I assume: "en", "sv", "gr"
const languages = [
  { code: "en", label: "EN" },
  { code: "sv", label: "SV" },
  { code: "gr", label: "GR" },
] as const;

export const LanguageToggle = ({ className }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        // pill container
        "inline-flex items-center gap-1",
        "rounded-full border border-slate-200 bg-slate-50/80",
        "px-1 py-1 shadow-sm backdrop-blur",
        "overflow-hidden w-auto max-w-fit shrink-0", // 👈 key: sizes to content
        className,
      )}
      style={{ width: "fit-content" }} // extra safety against parent flex styles
    >
      {languages.map((lng) => {
        const isActive = language === lng.code;

        return (
          <button
            key={lng.code}
            type="button"
            onClick={() => setLanguage(lng.code)}
            className={cn(
              "px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-all",
              isActive ? "bg-blue-600 text-white shadow-sm" : "bg-transparent text-slate-700 hover:bg-slate-100",
            )}
          >
            {lng.label}
          </button>
        );
      })}
    </div>
  );
};
