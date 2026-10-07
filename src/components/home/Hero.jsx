import Button from '../ui/Button';
import Container from '../ui/Container';
import { site } from '../../data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-slow-zoom bg-hero-home bg-cover bg-center will-change-transform"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/20" />

      <Container className="relative">
        <div className="mx-auto max-w-[600px] pb-24 pt-[150px] md:pb-[250px] md:pt-[350px]">
          <div className="flex animate-fade-up items-center [animation-delay:150ms]">
            <img src="/images/ai-img.png" alt="" width="37" height="36" />
            <p className="pl-2 text-sm text-white">At your service for 20 years!</p>
          </div>

          <h2 className="animate-fade-up pt-1 text-5xl font-bold tracking-tight text-white [animation-delay:300ms] sm:text-6xl">
            Mathieu <span className="text-primary">Arseneault</span>
          </h2>
          <p className="animate-fade-up pt-2 text-lg font-medium text-white [animation-delay:450ms] sm:text-[22px]">
            {site.tagline}
          </p>

          <ul className="flex animate-fade-up flex-wrap gap-4 pt-10 [animation-delay:600ms] sm:pt-16">
            <li>
              <Button to="/contact" variant="solid-soft">
                Join the division x team
              </Button>
            </li>
            <li>
              <Button to="/#about" variant="outline-light" className="sm:!px-10">
                Learn More
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
