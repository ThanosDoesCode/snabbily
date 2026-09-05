import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import WebsiteDesign from '@/pages/WebsiteDesign';
import HairBeauty from '@/pages/HairBeauty';
import StartProject from '@/pages/StartProject';
import FreeReview from '@/pages/FreeReview';
import Privacy from '@/pages/Privacy';
import Cookies from '@/pages/Cookies';
import NotFound from '@/pages/NotFound';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // English
      { index: true, element: <Home /> },
      { path: 'website-design-for-small-businesses', element: <WebsiteDesign /> },
      { path: 'websites-for-hair-beauty', element: <HairBeauty /> },
      { path: 'start', element: <StartProject /> },
      { path: 'review', element: <FreeReview /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'cookies', element: <Cookies /> },

      // Greek
      { path: 'el', element: <Home /> },
      { path: 'el/kataskevi-istoselidon', element: <WebsiteDesign /> },
      { path: 'el/kataskevi-istoselidon-gia-kommotiria', element: <HairBeauty /> },
      { path: 'el/start', element: <StartProject /> },
      { path: 'el/review', element: <FreeReview /> },
      { path: 'el/privacy', element: <Privacy /> },
      { path: 'el/cookies', element: <Cookies /> },

      // Fallback
      { path: '*', element: <NotFound /> },
    ],
  },
];
