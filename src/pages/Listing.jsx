import { useState } from 'react';
import Button from '../components/ui/Button';
import Carousel from '../components/ui/Carousel';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';
import { Highlight } from '../components/ui/Heading';
import PropertyCard from '../components/property/PropertyCard';
import Pagination from '../components/listing/Pagination';
import { properties } from '../data/properties';

const TOTAL_PAGES = 10;

function PropertyRow({ label }) {
  return (
    <Reveal className="pt-9">
      <Carousel
        label={label}
        items={properties}
        gap={22}
        showNav={false}
        showCounter={false}
        slideClassName="basis-full md:basis-1/2 xl:basis-1/3"
        renderSlide={(property) => <PropertyCard property={property} />}
      />
    </Reveal>
  );
}

export default function Listing() {
  const [page, setPage] = useState(1);

  return (
    <>
      <PageHero
        label="Page Listing"
        title={
          <>
            <Highlight>Let's Find Your Dream</Highlight> Home Together!
          </>
        }
        subtitle="SEE ALL LISTINGS IN QUÉBEC FROM OTHER REAL ESTATE AGENTS"
        image="/images/list-hero-img.png"
      >
        <Button to="/contact" className="sm:!px-10">
          get in touch
        </Button>
      </PageHero>

      <div className="bg-white bg-featured bg-cover bg-center bg-no-repeat pb-20 sm:pb-[90px]">
        <Container className="pt-2">
          <PropertyRow label="Listings, first row" />
          <PropertyRow label="Listings, second row" />
          <Pagination page={page} total={TOTAL_PAGES} onChange={setPage} />
        </Container>
      </div>
    </>
  );
}
