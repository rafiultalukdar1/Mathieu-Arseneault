import { useState } from 'react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import Carousel from '../ui/Carousel';
import Lightbox from './Lightbox';

/** Cover photo + thumbnail strip. Any photo opens the shared lightbox. */
export default function PropertyGallery({ cover, coverFull, images, title }) {
  const [active, setActive] = useState(null);
  const lightboxImages = [coverFull, ...images];
  const thumbs = images.map((src, i) => ({ id: `thumb-${i}`, src, lightboxIndex: i + 1 }));

  return (
    <div>
      <button
        type="button"
        onClick={() => setActive(0)}
        aria-label={`Open photo gallery for ${title}`}
        className="group relative block w-full overflow-hidden rounded-[28px]"
      >
        <img
          src={cover}
          alt={title}
          width="606"
          height="508"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
          <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/90 text-xl text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <FaMagnifyingGlassPlus />
          </span>
        </span>
      </button>

      <div className="mt-5">
        <Carousel
          label="Property photos"
          items={thumbs}
          gap={8}
          autoplay={false}
          showNav={false}
          showCounter={false}
          slideClassName="basis-1/3 sm:basis-1/4"
          renderSlide={(thumb) => (
            <button
              type="button"
              onClick={() => setActive(thumb.lightboxIndex)}
              aria-label={`Open photo ${thumb.lightboxIndex + 1}`}
              className="group block w-full overflow-hidden rounded-xl"
            >
              <img
                src={thumb.src}
                alt=""
                loading="lazy"
                draggable="false"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          )}
        />
      </div>

      {active !== null && (
        <Lightbox images={lightboxImages} index={active} onChange={setActive} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
