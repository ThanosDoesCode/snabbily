/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_SUBMIT_ENDPOINT?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_CAL_LINK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
