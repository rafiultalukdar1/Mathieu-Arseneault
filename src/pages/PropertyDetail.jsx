import { Link, useParams } from 'react-router-dom';
import { FaBath, FaBed, FaChartArea } from 'react-icons/fa6';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Reveal from '../components/ui/Reveal';
import PropertyGallery from '../components/property/PropertyGallery';
import StatusPage from './StatusPage';
import { getPropertyById, propertyDetails as details } from '../data/properties';
import { site } from '../data/site';

function Stat({ icon: Icon, label, value, divider }) {
  return (
    <div className={`relative flex-1 ${divider ? 'sm:after:absolute sm:after:-right-3 sm:after:top-0 sm:after:h-14 sm:after:w-px sm:after:bg-[#c7c7c7]' : ''}`}>
      <span className="inline-flex items-center text-base font-medium text-muted sm:text-lg">
        <Icon className="mr-1.5" aria-hidden="true" />
        {label}
      </span>
      <p className="pt-2.5 text-sm font-medium text-primary">{value}</p>
    </div>
  );
}

function SectionTitle({ lead, accent }) {
  return (
    <h2 className="text-4xl font-bold text-[#333] sm:text-5xl">
      {lead}
      <span className="text-primary">{accent}</span>
    </h2>
  );
}

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getPropertyById(id);

  if (!property) {
    return (
      <StatusPage
        title="Property not found"
        message="This listing may have been sold or the link is incorrect."
        action={{ to: '/listing', label: 'Browse listings' }}
      />
    );
  }

  return (
    <div className="bg-white bg-featured bg-cover bg-center bg-no-repeat">
      <Container className="py-9">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="right">
            <PropertyGallery
              cover={details.cover}
              coverFull={details.coverFull}
              images={details.gallery}
              title={property.fullAddress}
            />
          </Reveal>

          <Reveal direction="left" delay={100}>
            <div className="rounded-[20px] bg-[#f5f5f5]/60 p-5 pb-2 shadow-card">
              <Heading tone="dark" as="h1" className="normal-case">
                {property.fullAddress}
              </Heading>
              <p className="pt-3.5 text-base text-muted">{property.summary}</p>
              <p className="py-5 text-3xl font-bold text-primary sm:text-[40px] sm:leading-tight">
                {property.price} | {details.priceSuffix}
              </p>

              <div className="flex flex-col gap-6 rounded-xl border border-[#f0f0ee] bg-white p-5 sm:flex-row sm:gap-8">
                <Stat icon={FaBed} label="Bedrooms" value={String(property.beds).padStart(2, '0')} divider />
                <Stat icon={FaBath} label="Bathrooms" value={String(property.baths).padStart(2, '0')} divider />
                <Stat icon={FaChartArea} label="Area" value={details.area} />
              </div>

              <div className="pt-8">
                <Heading tone="dark" className="pb-4">
                  Dimensions
                </Heading>
                <dl>
                  {details.dimensions.map(({ label, value }) => (
                    <div
                      key={label}
                      className="-mx-2 flex justify-between rounded-lg px-2 py-2.5 transition-colors duration-300 hover:bg-white"
                    >
                      <dt className="text-lg font-bold text-[#bcbcbc] sm:text-xl">{label}</dt>
                      <dd className="text-lg font-medium text-[#888] sm:text-xl">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="pb-12 pt-5">
        <Container>
          <Reveal>
            <SectionTitle lead="Descri" accent="ption" />
            <p className="pt-3 text-base leading-[30px] text-body">{details.description}</p>
          </Reveal>

          <Reveal className="mt-12 grid gap-10 rounded-2xl bg-[#f5f5f5]/60 px-6 py-8 shadow-card sm:px-10 sm:py-9 md:grid-cols-2 lg:grid-cols-3">
            {details.specs.map(({ title, items }) => (
              <div key={title}>
                <h4 className="text-xl font-medium">{title}</h4>
                <ul>
                  {items.map(([label, value]) => (
                    <li key={label} className="relative mt-5 block pl-[18px] text-base text-[#484848]">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#333]"
                      />
                      <span className="text-[17px] font-semibold text-[#333]">{label}</span> : {value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 md:pb-[70px]">
        <Container>
          <Reveal>
            <SectionTitle lead="Loca" accent="tion" />
            <iframe
              title={`Map showing ${property.fullAddress}`}
              src={site.mapEmbed}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-5 block h-[360px] w-full rounded-[20px] border-0 shadow-[0_1px_16px_rgba(0,0,0,0.35)] md:h-[650px]"
            />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
