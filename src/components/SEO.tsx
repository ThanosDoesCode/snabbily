import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SEOProps) => {
  const { lang } = useLanguage();
  
  // Your domain
  const siteUrl = "https://snabbily.com"; 
  
  // Dynamic Title based on language
  const defaultTitle = "Snabbily - Fast Websites for Local Businesses";
  const currentTitle = title ? `${title} | Snabbily` : defaultTitle;
  const currentDescription = description || "Professional websites delivered in 3-4 days.";

  // Logic: If language is not English, append the query param for the canonical URL
  const getCanonicalUrl = () => {
    if (lang === 'en') return siteUrl;
    return `${siteUrl}?lang=${lang}`;
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      
      {/* THE FIX: User-Declared Canonical */}
      <link rel="canonical" href={getCanonicalUrl()} />

      {/* Hreflang Tags for Multi-language SEO */}
      <link rel="alternate" hrefLang="en" href={siteUrl} />
      <link rel="alternate" hrefLang="sv" href={`${siteUrl}?lang=sv`} />
      <link rel="alternate" hrefLang="el" href={`${siteUrl}?lang=el`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* Language Definition */}
      <html lang={lang} />
    </Helmet>
  );
};

export default SEO;