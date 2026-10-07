import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import JourneyCta from './JourneyCta';
import ScrollManager from './ScrollManager';
import ScrollProgress from './ScrollProgress';
import ScrollToTop from './ScrollToTop';
import { cn } from '../../utils/cn';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollManager />
      <ScrollProgress />
      <Header />
      {/* keyed on the path so every page gets a soft fade-in */}
      <main id="main" key={pathname} className={cn('animate-fade-in', !isHome && 'pt-24 md:pt-[104px]')}>
        <Outlet />
      </main>
      <JourneyCta />
      <Footer />
      <ScrollToTop />
    </>
  );
}
