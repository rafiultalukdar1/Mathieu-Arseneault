import { cn } from '../../utils/cn';

const sizes = {
  md: 'text-[26px] sm:text-3xl',
  lg: 'text-4xl sm:text-5xl',
};

/**
 * Section heading. Wrap the highlighted words in <Highlight> for the brand colour.
 * `tone="light"` is for dark backgrounds, `tone="dark"` for light ones.
 */
export default function Heading({ as: Tag = 'h2', tone = 'light', size = 'md', className, children }) {
  return (
    <Tag
      className={cn(
        'font-bold capitalize leading-[1.15] tracking-tight',
        sizes[size],
        tone === 'light' ? 'text-white' : 'text-ink',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Highlight({ children }) {
  return <span className="text-primary">{children}</span>;
}
