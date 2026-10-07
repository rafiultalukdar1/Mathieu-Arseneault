import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * - New route → jump to top instantly.
 * - Hash link (e.g. /#featured) → smooth-scroll to the element, even if already on that hash.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash, key]);

  return null;
}
