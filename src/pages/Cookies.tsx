import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { LegalDoc } from '@/components/LegalDoc';

export default function Cookies() {
  const { locale, t } = useI18n();
  return (
    <>
      <Seo locale={locale} pageKey="cookies" title={t.meta.cookies.title} description={t.meta.cookies.description} />
      <LegalDoc
        title={t.legal.cookies.title}
        intro={t.legal.cookies.intro}
        sections={t.legal.cookies.sections}
      />
    </>
  );
}
