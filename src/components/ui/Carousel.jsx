import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';

const pad = (n) => String(n).padStart(2, '0');

function NavButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cdcdcd] text-lg text-[#b4b4b4] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 active:scale-95 sm:h-14 sm:w-14"
    >
      {children}
    </button>
  );
}

/**
 * Generic, accessible carousel built on Embla (loop, drag/swipe, autoplay that pauses on hover).
 * Responsive slide widths come from `slideClassName` (e.g. "basis-full md:basis-1/2 xl:basis-1/3").
 */
export default function Carousel({
  items,
  renderSlide,
  slideClassName = 'basis-full',
  gap = 24,
  autoplay = true,
  delay = 3000,
  showNav = true,
  showCounter = true,
  label = 'Carousel',
}) {
  const reduced = usePrefersReducedMotion();
  const plugins = useMemo(
    () => (autoplay && !reduced ? [Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })] : []),
    [autoplay, delay, reduced],
  );
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: 'start' }, plugins);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(items.length);

  useEffect(() => {
    if (!api) return undefined;
    const sync = () => {
      setSelected(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };
    sync();
    api.on('select', sync).on('reInit', sync);
    return () => {
      api.off('select', sync).off('reInit', sync);
    };
  }, [api]);

  const prev = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      {/* Padding inside the overflow-hidden viewport keeps card shadows/hover-lift from being clipped. */}
      <div
        ref={viewportRef}
        onKeyDown={onKeyDown}
        tabIndex={0}
        className="-mx-2 -mb-8 -mt-3 cursor-grab overflow-hidden px-2 pb-8 pt-3 outline-offset-4 active:cursor-grabbing"
      >
        <div className="flex touch-pan-y" style={{ marginLeft: -gap }}>
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              className={cn('min-w-0 shrink-0 grow-0', slideClassName)}
              style={{ paddingLeft: gap }}
            >
              {renderSlide(item, i)}
            </div>
          ))}
        </div>
      </div>

      {(showNav || showCounter) && (
        <div className="mt-10 flex items-center justify-between gap-4">
          {showCounter ? (
            <p className="text-lg font-medium text-muted sm:text-xl" aria-live="polite">
              <span className="text-primary">{pad(selected + 1)}</span> of {pad(count)}
            </p>
          ) : (
            <span />
          )}
          {showNav && (
            <div className="flex gap-3">
              <NavButton label="Previous slide" onClick={prev}>
                <FaArrowLeft />
              </NavButton>
              <NavButton label="Next slide" onClick={next}>
                <FaArrowRight />
              </NavButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
