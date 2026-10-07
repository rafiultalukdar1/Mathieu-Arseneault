const SUMMARY = 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...';

export const properties = [
  {
    id: 'seaside-serenity-carignan',
    title: 'Seaside Serenity Villa',
    address: '1843 Rue des Roses, Carignan',
    fullAddress: '1843 Rue des Roses, Carignan, QC J3L',
    summary: SUMMARY,
    image: '/images/featured-slider-img.png',
    isNew: false,
    beds: 4,
    baths: 3,
    price: '$3,599,900',
  },
  {
    id: 'seaside-serenity-val-des-monts',
    title: 'Seaside Serenity Villa',
    address: '303 Ch. des Trois-Lacs, Val-des-Monts',
    fullAddress: '303 Ch. des Trois-Lacs, Val-des-Monts, QC',
    summary: SUMMARY,
    image: '/images/featured-slider-img2.png',
    isNew: true,
    beds: 4,
    baths: 3,
    price: '$2,299,900 +gst/qst',
  },
  {
    id: 'seaside-serenity-sainte-catherine',
    title: 'Seaside Serenity Villa',
    address: '185 Rue du Val-Joli, Sainte-Catherine-de-Hatley',
    fullAddress: '185 Rue du Val-Joli, Sainte-Catherine-de-Hatley, QC',
    summary: SUMMARY,
    image: '/images/featured-slider-img3.png',
    isNew: false,
    beds: 4,
    baths: 3,
    price: '$1,799,990',
  },
  {
    id: 'seaside-serenity-val-des-monts-2',
    title: 'Seaside Serenity Villa',
    address: '303 Ch. des Trois-Lacs, Val-des-Monts',
    fullAddress: '303 Ch. des Trois-Lacs, Val-des-Monts, QC',
    summary: SUMMARY,
    image: '/images/featured-slider-img2.png',
    isNew: true,
    beds: 4,
    baths: 3,
    price: '$2,299,900 +gst/qst',
  },
];

export const getPropertyById = (id) => properties.find((p) => p.id === id);

/** Detail-page content shared by every property until real data is wired in. */
export const propertyDetails = {
  area: '2,500 Square Feet',
  priceSuffix: '2550 PC',
  dimensions: [
    { label: 'Habitable', value: '2550 PC' },
    { label: 'Number of rooms', value: '22' },
    { label: 'Building', value: '0X0' },
    { label: 'Land', value: '2481 MC' },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  specs: [
    {
      title: 'Exterior Details',
      items: [
        ['Plot Size', '0.7 acers'],
        ['Roof', 'Partial the roof'],
        ['Construction', 'Frame and wood construction'],
        ['Cooling', 'Electric air conditioning'],
      ],
    },
    {
      title: 'Interior',
      items: [
        ['Interior Size', '3000 sq.ft'],
        ['Bedroom', '4'],
        ['Bathroom', '3'],
        ['Garage', '4 cars'],
        ['Laundry Room', 'Washer/Dryer Hookups'],
      ],
    },
    {
      title: 'Room Dimentions',
      items: [
        ['Living Room', '29×18'],
        ['Bedroom', '23×16'],
        ['Bathroom', '12×15'],
        ['Kitchen', '23×18'],
      ],
    },
  ],
  gallery: Array.from({ length: 5 }, () => '/images/detail-image.jpg'),
  cover: '/images/detail-slide-img.png',
  coverFull: '/images/detail-image.jpg',
};
