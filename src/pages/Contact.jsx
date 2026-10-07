import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import Heading, { Highlight } from '../components/ui/Heading';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/contact/ContactForm';
import { site } from '../data/site';

export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            <Highlight>Let's Find Your Dream</Highlight> Home <br className="hidden lg:block" /> Together!
          </>
        }
        subtitle="SEE ALL LISTINGS IN QUÉBEC FROM OTHER REAL ESTATE AGENTS"
        image="/images/contact-img.png"
      />

      <section className="py-16 md:py-[110px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="right" className="hidden lg:block">
              <img
                src="/images/contact-page-img.png"
                alt="Mathieu Arseneault"
                width="578"
                height="796"
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div className="rounded-lg bg-white p-6 shadow-[0_8px_24px_rgba(149,157,165,0.25)] sm:p-8">
                <Heading tone="dark">
                  How Can <Highlight>We Help? </Highlight>
                </Heading>
                <p className="pb-8 pt-4 text-base text-[#848282]">
                  Please select a topic below related to your inquiry. If you don't find what you need, fill out our
                  form, and/or contact us
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-label="Map">
        <iframe
          title="Office location"
          src={site.mapEmbed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[420px] w-full border-0 grayscale transition-[filter] duration-700 hover:grayscale-0 md:h-[720px]"
        />
      </section>
    </>
  );
}
