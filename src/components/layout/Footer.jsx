import { Link } from 'react-router-dom';
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhoneVolume,
  FaRegEnvelope,
  FaXTwitter,
} from 'react-icons/fa6';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import { footerLinks, footerNav } from '../../data/navigation';
import { site, socials } from '../../data/site';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
};

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h6 className="pb-6 text-[22px] font-semibold text-ink">{title}</h6>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center text-base text-[#848282] transition-colors duration-300 hover:text-primary"
            >
              <FaAngleRight className="mr-3 text-sm text-primary transition-transform duration-300 group-hover:translate-x-1" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="grid gap-10 pb-12 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <Reveal>
            <Link to="/" aria-label="Home">
              <img src="/images/marketing-img.png" alt="Mathieu Arseneault marketing" width="300" height="79" />
            </Link>
            <p className="max-w-[260px] pt-6 text-base font-medium text-[#888]">{site.tagline}</p>
            <ul className="flex gap-3 pt-4">
              {socials.map(({ id, label, href }) => {
                const Icon = socialIcons[id];
                return (
                  <li key={id}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-lg text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:justify-self-center">
            <FooterLinkList title="Navigations" links={footerNav} />
          </Reveal>

          <Reveal delay={200} className="lg:justify-self-center">
            <FooterLinkList title="Useful Link" links={footerLinks} />
          </Reveal>

          <Reveal delay={300} className="lg:justify-self-end">
            <h6 className="pb-6 text-[22px] font-semibold text-ink">Contact us</h6>
            <ul className="space-y-5 text-base text-[#848282]">
              <li>
                <Link to="/contact" className="inline-flex items-center transition-colors duration-300 hover:text-primary">
                  <FaPhoneVolume className="mr-3 shrink-0 text-xl text-primary" />
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center transition-colors duration-300 hover:text-primary"
                >
                  <FaRegEnvelope className="mr-3 shrink-0 text-xl text-primary" />
                  {site.email}
                </a>
              </li>
              <li className="flex">
                <FaLocationDot className="mr-3 mt-1 shrink-0 text-xl text-primary" />
                <address className="not-italic">
                  {site.address.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < site.address.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#e0e0e0] py-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-[#515151]">{site.copyright}</p>
          <div className="flex items-center">
            <p className="pr-2 text-sm text-[#515151]">Powered by</p>
            <a href="#" aria-label="Powered by" className="transition-opacity duration-300 hover:opacity-70">
              <img src="/images/footer-logo.png" alt="" width="119" height="44" className="h-9 w-auto" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
