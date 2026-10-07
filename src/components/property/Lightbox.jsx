import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaAngleLeft, FaAngleRight, FaXmark } from 'react-icons/fa6';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { cn } from '../../utils/cn';

/** Full-screen image viewer with keyboard, swipe and thumbnail navigation. */
export default function Lightbox({ images, index, onClose, onChange }) {
  const touchX = useRef(null);
  const closeRef = useRef(null);
  const total = images.length;
  useLockBodyScroll(true);

  const go = useCallback((dir) => onChange((index + dir + total) % total), [index, total, onChange]);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  const arrow =
    'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-primary';

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Property photo viewer"
      className="fixed inset-0 z-[80] flex animate-fade-in flex-col bg-black/90 backdrop-blur-md"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-white">
        <p className="text-sm font-medium tabular-nums text-white/70">
          {index + 1} / {total}
        </p>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close viewer"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:rotate-90 hover:bg-primary"
        >
          <FaXmark />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <button
          type="button"
          aria-label="Previous photo"
          className={cn(arrow, 'left-3 sm:left-6')}
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
        >
          <FaAngleLeft />
        </button>
        <img
          key={index}
          src={images[index]}
          alt={`Property photo ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full animate-fade-in rounded-xl object-contain shadow-2xl"
        />
        <button
          type="button"
          aria-label="Next photo"
          className={cn(arrow, 'right-3 sm:right-6')}
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
        >
          <FaAngleRight />
        </button>
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => onChange(i)}
            className={cn(
              'h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-16 sm:w-24',
              i === index ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-100',
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
}
