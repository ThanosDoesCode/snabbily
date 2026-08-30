import { Head } from 'vite-react-ssg';
import { useI18n } from '@/i18n';
import { CtaLink } from '@/components/Button';

export default function NotFound() {
  const { t, path } = useI18n();
  return (
    <>
      <Head>
        <title>{t.notFound.title} | Snabbily</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="shell flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
        <p className="font-serif text-7xl text-coral">404</p>
        <h1 className="mt-6 text-h2 text-ink">{t.notFound.title}</h1>
        <p className="mt-4 max-w-md text-lead text-ink-soft">{t.notFound.body}</p>
        <div className="mt-8">
          <CtaLink to={path('home')} size="lg">
            {t.notFound.cta}
          </CtaLink>
        </div>
      </div>
    </>
  );
}
