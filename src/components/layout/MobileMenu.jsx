import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import { brokerCta, isNavActive, mainNav } from '../../data/navigation';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { cn } from '../../utils/cn';

/** Off-canvas navigation drawer for < lg screens. */
export default function MobileMenu({ open, onClose }) {
  const location = useLocation();
  const closeRef = useRef(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden',
        open ? 'visible' : 'invisible transition-[visibility] delay-300',
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          'absolute inset-y-0 left-0 flex w-[320px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <Logo onClick={onClose} className="h-12" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-neutral-500 transition-all duration-300 hover:rotate-90 hover:bg-neutral-100 hover:text-primary"
          >
            <FaXmark />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pt-6" aria-label="Mobile">
          <ul>
            {mainNav.map((item, i) => {
              const active = isNavActive(item, location);
              return (
                <li
                  key={item.label}
                  className={cn(
                    'transition-all duration-500 ease-out',
                    open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                  )}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                >
                  <Link
                    to={item.to}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block border-l-2 px-[18px] py-3 text-lg font-medium transition-all duration-300',
                      active
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-transparent text-[#888] hover:border-primary hover:bg-neutral-50 hover:pl-6 hover:text-primary',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-5 pb-8 pt-4">
          <Link
            to={brokerCta.to}
            onClick={onClose}
            className="block rounded-[10px] border border-primary py-3.5 text-center text-lg font-medium capitalize text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
          >
            {brokerCta.label}
          </Link>
        </div>
      </aside>
    </div>
  );
}
