import Button from '../ui/Button';
import Carousel from '../ui/Carousel';
import Container from '../ui/Container';
import Heading, { Highlight } from '../ui/Heading';
import Reveal from '../ui/Reveal';
import PropertyCard from '../property/PropertyCard';
import { properties } from '../../data/properties';

export default function FeaturedProperties() {
  return (
    <section id="featured" className="bg-white bg-featured bg-cover bg-center bg-no-repeat pb-20 pt-14">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Heading tone="dark" size="lg" className="normal-case">
              Featured <Highlight>Properties</Highlight>
            </Heading>
            <p className="max-w-3xl pt-4 text-base font-medium text-muted">
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional
              homes and investments available through Estatein. Click "View Details" for more information.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/listing">View All Properties</Button>
          </div>
        </Reveal>

        <Reveal className="mt-12 md:mt-14" delay={100}>
          <Carousel
            label="Featured properties"
            items={properties}
            gap={22}
            slideClassName="basis-full md:basis-1/2 xl:basis-1/3"
            renderSlide={(property) => <PropertyCard property={property} />}
          />
        </Reveal>
      </Container>
    </section>
  );
}
