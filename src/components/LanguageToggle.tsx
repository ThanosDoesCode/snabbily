// LanguageToggle.tsx
import { useLanguage } from "@/contexts/LanguageContext";

const languages = ["EN", "SV", "GR"] as const;

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="
        inline-flex items-center gap-1
        rounded-full border border-slate-200
        bg-slate-50/80 px-1 py-1
        shadow-sm backdrop-blur
        overflow-hidden              /* <– keeps border clean on mobile */
        text-xs sm:text-sm
      "
    >
      {languages.map((code) => {
        const isActive = language === code.toLowerCase();

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code.toLowerCase())}
            className={`
              px-3 sm:px-4 py-1
              font-semibold
              transition-all duration-200
              rounded-full
              whitespace-nowrap
              ${isActive ? "bg-blue-600 text-white shadow-sm" : "bg-transparent text-slate-700 hover:bg-slate-100"}
            `}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
