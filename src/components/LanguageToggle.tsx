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
        overflow-hidden
        w-auto max-w-fit shrink-0   /* 👈 important */
      "
      style={{ width: "fit-content" }} /* extra safety */
    >
      {languages.map((code) => {
        const isActive = language === code.toLowerCase();

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code.toLowerCase())}
            className={`
              px-3 py-1
              text-xs font-semibold
              rounded-full
              whitespace-nowrap
              transition-all
              ${isActive ? "bg-blue-600 text-white" : "bg-transparent text-slate-700 hover:bg-slate-100"}
            `}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
