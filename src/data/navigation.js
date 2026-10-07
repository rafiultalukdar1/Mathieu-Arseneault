/**
 * Primary navigation.
 * `match` lists path prefixes that should mark the item active.
 * "Houses" points at the featured-properties section on the home page.
 */
export const mainNav = [
  { label: 'Home', to: '/', match: ['/'] },
  { label: 'Houses', to: '/#featured' },
  { label: 'Listing', to: '/listing', match: ['/listing', '/property'] },
  { label: 'Contact Us', to: '/contact', match: ['/contact'] },
];

export const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'About Mathieu', to: '/#about' },
  { label: 'About EXP', to: '/#exp' },
  { label: 'Sell', to: '/listing' },
  { label: 'Buy', to: '/listing' },
  { label: 'My Properties', to: '/listing' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerLinks = [
  { label: 'Press Release', to: '/press-release' },
  { label: 'Terms and conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

export const brokerCta = { label: 'Become an expert broker', to: '/contact' };

/** Decides whether a nav item is active for the current router location. */
export function isNavActive(item, { pathname, hash }) {
  const [path, anchor] = item.to.split('#');
  if (anchor) return pathname === (path || '/') && hash === `#${anchor}`;
  if (item.to === '/') return pathname === '/' && hash !== '#featured';
  return item.match?.some((prefix) => pathname.startsWith(prefix)) ?? false;
}
