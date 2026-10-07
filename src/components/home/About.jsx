import Button from '../ui/Button';
import Container from '../ui/Container';
import Heading, { Highlight } from '../ui/Heading';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <section id="about" className="bg-black bg-estate bg-cover bg-center bg-no-repeat py-16 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <img
              src="/images/eestate-group-img.png"
              alt="Mathieu with his family and team"
              width="538"
              height="357"
              loading="lazy"
              className="mx-auto w-full max-w-[538px] transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </Reveal>

          <Reveal direction="left" delay={120}>
            <strong className="text-sm font-bold capitalize text-white">who am i?</strong>
            <Heading className="py-1.5">
              <Highlight>Real estate broker, father,</Highlight>
              <br /> philanthropist, pilot
            </Heading>
            <p className="pt-3 text-[15px] font-medium leading-7 text-white/90">
              Real estate has been in my family for a while. I’ve been involved in real estate since childhood, but my
              professional journey started with being a 18-year-old with a dream. After a lot of sacrifices, hard work
              and dedication, I stand out from the other brokers in the region.
            </p>
            <p className="pt-3 text-[15px] font-medium leading-7 text-white/90">
              Still, being a father and giving back to the community that made me who I am are my top priorities. When
              I’m not working, you can either find me spending time with my family, or making dreams come true for
              people in need.
            </p>
            <div className="pt-6">
              <Button to="/#exp" className="sm:!px-10">
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
