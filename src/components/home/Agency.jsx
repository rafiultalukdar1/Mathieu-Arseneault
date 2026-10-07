import Button from '../ui/Button';
import Container from '../ui/Container';
import Heading, { Highlight } from '../ui/Heading';
import Reveal from '../ui/Reveal';

const copy = 'text-[15px] font-medium leading-7 text-white/90';

export default function Agency() {
  return (
    <section className="bg-black bg-agency bg-cover bg-center bg-no-repeat py-16 md:py-[90px]">
      <Container className="space-y-16 md:space-y-24">
        {/* Exp agency */}
        <div id="exp" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <video
              poster="/images/thambnail-img.png"
              controls
              preload="metadata"
              className="w-full max-w-[605px] rounded-[20px] object-cover shadow-[0_1px_10px_3px_rgba(241,241,241,0.25)] transition-transform duration-500 hover:scale-[1.015]"
            >
              <source src="/video/demo-video.mp4" type="video/mp4" />
            </video>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <Heading>
              <Highlight>Exp Agency</Highlight> Explique
            </Heading>
            <strong className="block py-1.5 text-sm font-bold capitalize text-white">Agency</strong>
            <p className={copy}>
              With the highest progress rate in the field and more than 86 000 brokers in 20+ countries around the
              world, eXp is focused on transforming the real estate industry. It does so by bringing changes to the
              market – giving more freedom to brokers and providing them with an opportunity to manage their own
              business while receiving extraordinary technology and knowledge they can then pass on.
            </p>
            <p className={`${copy} pt-3`}>
              eXp was set up by a real estate broker, like me, who wanted the change the industry. An industry that
              definitively needed to change. He was fed up with the exorbitant annual fees paid to an agency and the
              little support offered. This is why eXp puts people first and provides brokers with relatively low
              brokerage fees.
            </p>
            <div className="pt-6">
              <Button to="/contact" className="sm:!px-[60px]">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Teammate */}
        <div id="team" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="order-2 lg:order-1">
            <strong className="text-sm font-bold capitalize text-white">Agency</strong>
            <Heading className="py-1.5">
              <Highlight>A Teammate That</Highlight> Will Help You Triumph
            </Heading>
            <p className={`${copy} pt-3`}>
              Being a co-owner &amp; shareholder of the eXp group, and a proud owner of the Groupe Elite Arseneault,
              allows me to elevate my knowledge of the industry and pass it on, not only to my clients but to my
              teammates, too.
            </p>
            <p className={`${copy} pt-3`}>
              I’m constantly on the lookout for high-quality, like-minded and hardworking brokers to become a part of
              my team. Join me and eXp and help us proceed with providing our clients with top-notch service.
            </p>
            <div className="pt-6">
              <Button to="/contact" className="sm:!px-[60px]">
                join my team
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120} className="order-1 lg:order-2">
            <img
              src="/images/teammate-img.png"
              alt="Mathieu's team"
              width="635"
              height="368"
              loading="lazy"
              className="mx-auto w-full max-w-[635px] transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
