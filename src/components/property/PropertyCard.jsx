import { FaBath, FaBed, FaLocationDot } from 'react-icons/fa6';
import Button from '../ui/Button';

export default function PropertyCard({ property }) {
  const { id, title, address, summary, image, isNew, beds, baths, price } = property;

  return (
    <article className="group flex h-full flex-col rounded-xl bg-[#f5f5f5]/60 p-5 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-card-hover">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={`${title} – ${address}`}
          width="360"
          height="240"
          loading="lazy"
          draggable="false"
          className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute left-2.5 top-3 rounded-md bg-primary/80 px-3.5 py-2 text-base font-semibold text-white backdrop-blur-sm">
            New
          </span>
        )}
      </div>

      <h4 className="pb-2 pt-7 text-2xl font-semibold text-ink">{title}</h4>
      <p className="flex items-start text-base font-medium text-muted">
        <FaLocationDot className="mr-2.5 mt-1 shrink-0 text-[15px]" />
        {address}
      </p>
      <p className="pt-2.5 text-base text-body">{summary}</p>

      <div className="mt-auto flex items-center justify-between gap-3 py-7">
        <div className="flex items-center gap-5 text-lg font-medium text-[#3e3838]">
          <span className="inline-flex items-center gap-2" title={`${beds} bedrooms`}>
            <FaBed className="text-base text-muted" aria-hidden="true" />
            {beds}
          </span>
          <span className="inline-flex items-center gap-2" title={`${baths} bathrooms`}>
            <FaBath className="text-base text-muted" aria-hidden="true" />
            {baths}
          </span>
        </div>
        <h6 className="text-right text-lg font-semibold text-[#3e3838] sm:text-xl">{price}</h6>
      </div>

      <Button to={`/property/${id}`} block className="!py-[15px]">
        View Property Details
      </Button>
    </article>
  );
}
