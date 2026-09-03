import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { organizationLd, websiteLd, faqPageLd } from '@/lib/structuredData';
import { Hero } from '@/sections/Hero';
import { SelectedWork } from '@/sections/SelectedWork';
import { Capabilities } from '@/sections/Capabilities';
import { HairBeautyPreview } from '@/sections/HairBeautyPreview';
import { Process } from '@/sections/Process';
import { Pricing } from '@/sections/Pricing';
import { Faq } from '@/sections/Faq';
import { Contact } from '@/sections/Contact';

export default function Home() {
  const { locale, t } = useI18n();
  return (
    <>
      <Seo
        locale={locale}
        pageKey="home"
        title={t.meta.home.title}
        description={t.meta.home.description}
        jsonLd={[organizationLd(), websiteLd(), faqPageLd(t.faq.items)]}
      />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <HairBeautyPreview />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
}
