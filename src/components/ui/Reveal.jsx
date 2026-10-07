import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

const hiddenState = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  none: '',
};

/**
 * Fades + slides its children in once they scroll into view.
 * Uses a single IntersectionObserver per instance, animates only opacity/transform
 * (GPU friendly) and is disabled for users who prefer reduced motion.
 */
export default function Reveal({ as: Tag = 'div', direction = 'up', delay = 0, className, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out',
        shown ? 'translate-x-0 translate-y-0 opacity-100' : cn('opacity-0', hiddenState[direction]),
        'motion-reduce:!translate-x-0 motion-reduce:!translate-y-0 motion-reduce:!opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
