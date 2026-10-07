import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { cn } from '../../utils/cn';

/** 1 … current-1 current current+1 … total, with ellipses where pages are skipped. */
function getPages(current, total) {
  const set = new Set([1, total, current - 1, current, current + 1].filter((p) => p >= 1 && p <= total));
  const sorted = [...set].sort((a, b) => a - b);
  const out = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push(`gap-${p}`);
    out.push(p);
  });
  return out;
}

const box =
  'flex h-8 min-w-8 items-center justify-center rounded border border-[#88888871] px-1 text-[13px] font-semibold text-[#888] transition-all duration-300';

export default function Pagination({ page, total, onChange }) {
  return (
    <nav aria-label="Pagination" className="flex flex-col items-center justify-between gap-5 pt-14 sm:flex-row sm:pt-[70px]">
      <div className="flex items-center text-sm font-semibold text-[#bababa]">
        <label htmlFor="page-select">Page</label>
        <select
          id="page-select"
          value={page}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mx-2.5 cursor-pointer appearance-none rounded bg-[url('/images/input-down-arrow.png')] bg-[length:15px] bg-[position:calc(100%-12px)_50%] bg-no-repeat py-2 pl-7 pr-9 text-center text-sm font-semibold text-[#7d7c7c] outline-none transition-shadow hover:shadow-md focus:ring-2 focus:ring-primary/40"
        >
          {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <span>of {total}</span>
      </div>

      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
            className={cn(box, 'hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40')}
          >
            <FaAngleLeft />
          </button>
        </li>
        {getPages(page, total).map((p) => (
          <li key={p}>
            {typeof p === 'string' ? (
              <span className="flex h-8 w-8 items-center justify-center text-[#888]">…</span>
            ) : (
              <button
                type="button"
                aria-current={p === page ? 'page' : undefined}
                onClick={() => onChange(p)}
                className={cn(
                  box,
                  p === page
                    ? 'border-primary bg-primary text-white shadow-md shadow-primary/30'
                    : 'hover:border-primary hover:bg-primary hover:text-white',
                )}
              >
                {p}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={page === total}
            onClick={() => onChange(page + 1)}
            className={cn(box, 'hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40')}
          >
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
