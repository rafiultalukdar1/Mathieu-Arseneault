import { FaStar } from 'react-icons/fa6';
import Button from '../ui/Button';
import Carousel from '../ui/Carousel';
import Container from '../ui/Container';
import Heading, { Highlight } from '../ui/Heading';
import Reveal from '../ui/Reveal';
import { testimonials } from '../../data/testimonials';

function TestimonialCard({ item }) {
  return (
    <figure className="flex h-full min-h-[460px] flex-col rounded-xl bg-[#f5f5f5]/60 px-6 py-10 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-card-hover sm:py-12">
      <div className="flex items-center justify-center gap-2 sm:gap-3" role="img" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }, (_, i) => (
          <span
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5] text-lg text-[#ffe500] sm:h-11 sm:w-11 sm:text-2xl"
          >
            <FaStar aria-hidden="true" />
          </span>
        ))}
      </div>
      <h4 className="pt-8 text-2xl font-semibold text-ink sm:pt-10">{item.title}</h4>
      <blockquote className="pt-3.5 text-sm font-medium leading-6 text-[#888]">{item.text}</blockquote>
      <figcaption className="mt-auto flex items-center justify-center gap-3 pt-10">
        <img
          src={item.avatar}
          alt=""
          width="60"
          height="60"
          loading="lazy"
          className="h-[60px] w-[60px] rounded-full object-cover ring-2 ring-primary/20"
        />
        <div className="text-left">
          <h6 className="text-sm font-medium text-primary">{item.name}</h6>
          <p className="pt-0.5 text-sm font-medium text-muted">{item.place}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white bg-featured bg-cover bg-center bg-no-repeat py-16">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Heading tone="dark">
              What our <Highlight>clients say</Highlight>
            </Heading>
            <p className="max-w-3xl pt-4 text-base font-medium text-muted">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose
              Estatein for their real estate needs.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/contact">View All Testimonials</Button>
          </div>
        </Reveal>

        <Reveal className="mt-12 md:mt-14" delay={100}>
          <Carousel
            label="Client testimonials"
            items={testimonials}
            gap={32}
            slideClassName="basis-full lg:basis-1/2"
            renderSlide={(item) => <TestimonialCard item={item} />}
          />
        </Reveal>
      </Container>
    </section>
  );
}
