import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import { brokerCta, isNavActive, mainNav } from '../../data/navigation';
import useScrolled from '../../hooks/useScrolled';
import { cn } from '../../utils/cn';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  // On the home page the header floats over the dark hero; elsewhere it sits on white.
  const onDark = isHome;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300 py-5',
          scrolled
            ? cn('py-2.5 shadow-lg backdrop-blur-xl', onDark ? 'bg-black/70 shadow-black/20' : 'bg-white/85 shadow-black/5')
            : 'py-5 md:py-6',
        )}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo variant={onDark ? 'light' : 'dark'} />

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center">
              {mainNav.map((item) => {
                const active = isNavActive(item, location);
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'group relative block px-4 py-2 text-lg font-medium transition-colors duration-300',
                        active
                          ? 'text-primary'
                          : onDark
                            ? 'text-white hover:text-primary'
                            : 'text-[#888] hover:text-primary',
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-4 bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ease-out',
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button to={brokerCta.to} variant={onDark ? 'white' : 'outline'} size="sm" className="!py-4">
              {brokerCta.label}
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full text-2xl transition-all duration-300 hover:bg-primary/10 hover:text-primary active:scale-90 lg:hidden',
              onDark ? 'text-white' : 'text-[#888]',
            )}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
