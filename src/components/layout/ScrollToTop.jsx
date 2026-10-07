import { FaArrowUp } from 'react-icons/fa6';
import useScrolled from '../../hooks/useScrolled';
import { cn } from '../../utils/cn';

export default function ScrollToTop() {
  const visible = useScrolled(500);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-5 right-5 z-40 transition-all duration-500 sm:bottom-6 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      <span className="relative flex h-11 w-11 animate-float items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-colors duration-300 hover:bg-primary-dark">
        <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ring rounded-full bg-primary" />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ring rounded-full bg-primary [animation-delay:1.2s]"
        />
        <FaArrowUp className="text-base" />
      </span>
    </button>
  );
}
