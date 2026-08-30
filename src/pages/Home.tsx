import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { organizationLd, websiteLd } from '@/lib/structuredData';
import { Hero } from '@/sections/Hero';
import { SelectedWork } from '@/sections/SelectedWork';
import { Capabilities } from '@/sections/Capabilities';
import { WhyWebsite } from '@/sections/WhyWebsite';
import { HairBeautyPreview } from '@/sections/HairBeautyPreview';
import { Booking } from '@/sections/Booking';
import { Process } from '@/sections/Process';
import { Pricing } from '@/sections/Pricing';
import { FreeReviewSection } from '@/sections/FreeReviewSection';
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
        jsonLd={[organizationLd(), websiteLd()]}
      />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <WhyWebsite />
      <HairBeautyPreview />
      <Booking />
      <Process />
      <Pricing />
      <FreeReviewSection />
      <Contact />
    </>
  );
}
