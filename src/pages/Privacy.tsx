import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { LegalDoc } from '@/components/LegalDoc';

export default function Privacy() {
  const { locale, t } = useI18n();
  return (
    <>
      <Seo locale={locale} pageKey="privacy" title={t.meta.privacy.title} description={t.meta.privacy.description} />
      <LegalDoc
        title={t.legal.privacy.title}
        intro={t.legal.privacy.intro}
        sections={t.legal.privacy.sections}
      />
    </>
  );
}
