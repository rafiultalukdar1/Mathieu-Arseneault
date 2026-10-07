import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = 'h-14 sm:h-[70px]', onClick }) {
  // "menu-logo.png" is the white mark for dark backgrounds, "menu-logo2.png" the coloured one.
  const src = variant === 'light' ? '/images/menu-logo.png' : '/images/menu-logo2.png';
  return (
    <Link to="/" onClick={onClick} aria-label="Mathieu Arseneault – home" className="inline-block shrink-0">
      <img
        src={src}
        alt=""
        className={`${className} w-auto transition-transform duration-300 hover:scale-105`}
      />
    </Link>
  );
}
