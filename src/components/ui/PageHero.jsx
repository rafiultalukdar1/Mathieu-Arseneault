import Container from './Container';
import Heading from './Heading';
import Reveal from './Reveal';

/** Dark rounded hero banner shared by the Listing and Contact pages. */
export default function PageHero({ label, title, subtitle, image, imageAlt = '', children }) {
  return (
    <section className="pb-9 pt-6">
      <Container>
        <div className="overflow-hidden rounded-[20px] bg-black bg-dream bg-cover bg-center px-6 py-12 sm:px-12 lg:px-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Reveal direction="right">
                <div className="flex items-center pb-4">
                  <img src="/images/ai-img.png" alt="" width="37" height="36" />
                  <p className="pl-1.5 text-sm font-bold text-white">{label}</p>
                </div>
                <Heading>{title}</Heading>
                <h6 className="pt-5 text-sm font-medium uppercase tracking-wide text-white">{subtitle}</h6>
                {children && <div className="pt-9">{children}</div>}
              </Reveal>
            </div>
            <Reveal direction="left" delay={120} className="order-1 lg:order-2">
              <img
                src={image}
                alt={imageAlt}
                width="590"
                height="301"
                className="mx-auto w-full max-w-[590px] transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
