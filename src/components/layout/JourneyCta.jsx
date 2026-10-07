import Button from '../ui/Button';
import Container from '../ui/Container';
import Heading, { Highlight } from '../ui/Heading';
import Reveal from '../ui/Reveal';

/** Black call-to-action band shown above the footer on every page. */
export default function JourneyCta() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-[100px]">
      <img
        src="/images/journey-after.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden select-none opacity-90 md:block"
      />
      <img
        src="/images/journey-before.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden select-none opacity-90 md:block"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:px-16">
          <Reveal className="lg:col-span-7">
            <Heading>
              Start Your Real <Highlight>Estate Journey Today</Highlight>
            </Heading>
            <p className="pt-4 text-base font-medium text-white/90 sm:text-lg">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment,
              or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step
              towards your real estate goals and explore our available properties or get in touch with our team for
              personalized assistance.
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:text-right">
            <Button to="/listing" variant="solid">
              Explore Properties
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
