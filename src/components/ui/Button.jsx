import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Every variant shares the same hover language: a fill sweeps in from the left
 * while the label colour flips. `fill` is the sweeping layer, `box` the resting look.
 */
const variants = {
  outline: {
    box: 'border-primary text-primary hover:text-white',
    fill: 'bg-primary',
  },
  solid: {
    box: 'border-primary bg-primary text-white hover:text-primary',
    fill: 'bg-white',
  },
  white: {
    box: 'border-white bg-white text-primary hover:border-primary hover:text-white',
    fill: 'bg-primary',
  },
  'solid-soft': {
    box: 'border-primary bg-primary text-white hover:border-white',
    fill: 'bg-black/30',
  },
  'outline-light': {
    box: 'border-white text-white hover:border-primary',
    fill: 'bg-primary',
  },
};

const sizes = {
  sm: 'px-5 py-3 text-base',
  md: 'px-6 py-[15px] text-base sm:py-[17px] sm:text-lg',
};

export default function Button({
  variant = 'outline',
  size = 'md',
  to,
  href,
  block = false,
  className,
  children,
  ...rest
}) {
  const v = variants[variant];
  const classes = cn(
    'group relative inline-flex select-none items-center justify-center overflow-hidden rounded-[10px] border font-medium capitalize leading-tight',
    'transition-[color,border-color,box-shadow,transform] duration-300 ease-out',
    'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0 active:scale-[0.98]',
    sizes[size],
    v.box,
    block && 'w-full',
    className,
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100',
          v.fill,
        )}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
