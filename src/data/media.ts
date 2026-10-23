export interface Plate {
  id: string;
  file: string;
  width: number;
  height: number;
  ratio: '4:5' | '3:4' | '1:1' | '4:3' | '2:1';
  focus: string;
  chapter: 1 | 2 | 3 | 4;
  maxRender?: number | null;
  publish: boolean;
  sizeBytes: number;
  caption?: {
    ar: string;
    en: string;
  };
  alt?: {
    ar: string;
    en: string;
  };
}

export interface Film {
  id: string;
  file: string;
  poster: string;
  width: number;
  height: number;
  aspect: '9:16' | '1:1';
  duration: number; // in seconds
  locales: ('ar' | 'en')[];
  publish: boolean;
  sizeBytes: number;
  posterSizeBytes: number;
}

export const plates: Plate[] = [
  // Chapter 1: Lawns and paths
  {
    id: '03',
    file: '/media/img/plate-03-v1.jpg',
    width: 1080,
    height: 968,
    ratio: '4:3',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 90953,
    caption: {
      ar: 'ممرات حجرية تحيط بمسطحات خضراء يانعة',
      en: 'Stone paths bordering lush green lawns',
    },
    alt: {
      ar: 'ممرات حجرية تحيط بمسطحات خضراء يانعة',
      en: 'Stone paths bordering lush green lawns',
    },
  },
  {
    id: '40',
    file: '/media/img/plate-40-v1.jpg',
    width: 1080,
    height: 759,
    ratio: '4:3',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 119326,
    caption: {
      ar: 'حدائق فيلا بإنارة مسائية وإطلالة هادئة',
      en: 'Villa garden in serene evening illumination',
    },
    alt: {
      ar: 'حدائق فيلا بإنارة مسائية وإطلالة هادئة',
      en: 'Villa garden in serene evening illumination',
    },
  },
  {
    id: '06',
    file: '/media/img/plate-06-v1.jpg',
    width: 1080,
    height: 1394,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 216848,
    alt: {
      ar: 'مسطحات وممرات خضراء',
      en: 'Lawns and paths',
    },
  },
  {
    id: '31',
    file: '/media/img/plate-31-v1.jpg',
    width: 900,
    height: 1600,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 447462,
    alt: {
      ar: 'تنسيق مدخل الحديقة بممرات متناسقة',
      en: 'Garden entrance with aligned pathway',
    },
  },
  {
    id: '01',
    file: '/media/img/plate-01-v1.jpg',
    width: 600,
    height: 800,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 1,
    maxRender: 300,
    publish: true,
    sizeBytes: 82289,
    alt: {
      ar: 'ممر حديقة جانبي',
      en: 'Side garden pathway',
    },
  },
  {
    id: '14',
    file: '/media/img/plate-14-v1.jpg',
    width: 1080,
    height: 988,
    ratio: '1:1',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 108078,
    alt: {
      ar: 'مسطح عشب طبيعي ممتد',
      en: 'Expansive natural lawn area',
    },
  },
  {
    id: '05',
    file: '/media/img/plate-05-v1.jpg',
    width: 1080,
    height: 560,
    ratio: '2:1',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 55400,
    alt: {
      ar: 'بانوراما لمسطح وثيل الحديقة',
      en: 'Panorama of garden lawn and borders',
    },
  },
  {
    id: '17',
    file: '/media/img/plate-17-v1.jpg',
    width: 1080,
    height: 1052,
    ratio: '1:1',
    focus: '50% 50%',
    chapter: 1,
    publish: true,
    sizeBytes: 138404,
    caption: {
      ar: 'مسطح ثيل طبيعي مع ممرات بلاط منتظمة',
      en: 'Natural turf with structured slab stepping paths',
    },
    alt: {
      ar: 'مسطح ثيل طبيعي مع ممرات بلاط منتظمة',
      en: 'Natural turf with structured slab stepping paths',
    },
  },

  // Chapter 2: Flowers and borders
  {
    id: '27',
    file: '/media/img/plate-27-v1.jpg',
    width: 1080,
    height: 1230,
    ratio: '4:5',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 276487,
    caption: {
      ar: 'أحواض نباتية وأزهار موسمية بألوان زاهية',
      en: 'Planting beds with vibrant seasonal flowers',
    },
    alt: {
      ar: 'أحواض نباتية وأزهار موسمية بألوان زاهية',
      en: 'Planting beds with vibrant seasonal flowers',
    },
  },
  {
    id: '42',
    file: '/media/img/plate-42-v1.jpg',
    width: 1080,
    height: 1394,
    ratio: '4:5',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 249287,
    alt: {
      ar: 'نباتات متسلقة مزهرة على جدار أبيض فوق مسطح ثيل',
      en: 'Flowering climbers on a white garden wall above a lawn',
    },
  },
  {
    id: '43',
    file: '/media/img/plate-43-v1.jpg',
    width: 1013,
    height: 1350,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 227126,
    alt: {
      ar: 'نبتة متسلقة مزهرة بكثافة',
      en: 'Dense flowering vine in bloom',
    },
  },
  {
    id: '07',
    file: '/media/img/plate-07-v1.jpg',
    width: 899,
    height: 1599,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 229284,
    caption: {
      ar: 'زهور متسلقة على جدران الفناء',
      en: 'Flowering climbers along courtyard walls',
    },
    alt: {
      ar: 'زهور متسلقة على جدران الفناء',
      en: 'Flowering climbers along courtyard walls',
    },
  },
  {
    id: '32',
    file: '/media/img/plate-32-v1.jpg',
    width: 899,
    height: 1599,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 155739,
    alt: {
      ar: 'أزهار وزينة جدارية في الحديقة',
      en: 'Floral and wall greenery in garden',
    },
  },
  {
    id: '21',
    file: '/media/img/plate-21-v1.jpg',
    width: 899,
    height: 1599,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 177721,
    alt: {
      ar: 'زهور وأوراق خضراء متنوعة',
      en: 'Floral borders and green foliage',
    },
  },
  {
    id: '09',
    file: '/media/img/plate-09-v1.jpg',
    width: 899,
    height: 1599,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    publish: true,
    sizeBytes: 254678,
    alt: {
      ar: 'نباتات ظل وأزهار في ممر فيلا',
      en: 'Shade plants and blossoms in villa walkway',
    },
  },
  {
    id: '02',
    file: '/media/img/plate-02-v1.jpg',
    width: 679,
    height: 1280,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 2,
    maxRender: 340,
    publish: true,
    sizeBytes: 150770,
    alt: {
      ar: 'شجيرات وأزهار في مسار الحديقة',
      en: 'Borders and blooms along garden path',
    },
  },

  // Chapter 3: Walls, planters and façades
  {
    id: '10',
    file: '/media/img/plate-10-v1.jpg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    focus: '50% 50%',
    chapter: 3,
    publish: true,
    sizeBytes: 222573,
    caption: {
      ar: 'جلسة خارجية بتنسيق متكامل مع الأشجار',
      en: 'Outdoor garden seating integrated with trees',
    },
    alt: {
      ar: 'جلسة خارجية بتنسيق متكامل مع الأشجار',
      en: 'Outdoor garden seating integrated with trees',
    },
  },
  {
    id: '15',
    file: '/media/img/plate-15-v1.jpg',
    width: 1200,
    height: 1600,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 3,
    publish: true,
    sizeBytes: 220164,
    caption: {
      ar: 'تشكيلات شجيرات ونخيل في زوايا الفناء',
      en: 'Shrub compositions and palms in courtyard corners',
    },
    alt: {
      ar: 'تشكيلات شجيرات ونخيل في زوايا الفناء',
      en: 'Shrub compositions and palms in courtyard corners',
    },
  },
  {
    id: '36',
    file: '/media/img/plate-36-v1.jpg',
    width: 960,
    height: 1280,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 3,
    publish: true,
    sizeBytes: 185641,
    caption: {
      ar: 'ديكورات حجرية وجداريات خضراء أنيقة',
      en: 'Stone architectural details and lush green walls',
    },
    alt: {
      ar: 'ديكورات حجرية وجداريات خضراء أنيقة',
      en: 'Stone architectural details and lush green walls',
    },
  },
  {
    id: '22',
    file: '/media/img/plate-22-v1.jpg',
    width: 707,
    height: 1280,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 3,
    publish: true,
    sizeBytes: 145081,
    alt: {
      ar: 'أحواض نباتية جدارية',
      en: 'Wall planter compositions',
    },
  },
  {
    id: '24',
    file: '/media/img/plate-24-v1.jpg',
    width: 621,
    height: 1280,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 3,
    maxRender: 310,
    publish: true,
    sizeBytes: 154734,
    alt: {
      ar: 'كسوة نباتية لجدران الفناء',
      en: 'Botanical foliage along exterior courtyard walls',
    },
  },
  {
    id: '44',
    file: '/media/img/plate-44-v1.jpg',
    width: 960,
    height: 1280,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 3,
    publish: true,
    sizeBytes: 191228,
    alt: {
      ar: 'واجهات نباتية وجلسة فيلا خارجية',
      en: 'Vegetative façades and outdoor villa setting',
    },
  },

  // Chapter 4: Palms
  {
    id: '34',
    file: '/media/img/plate-34-v1.jpg',
    width: 679,
    height: 1207,
    ratio: '3:4',
    focus: '50% 50%',
    chapter: 4,
    maxRender: 340,
    publish: true,
    sizeBytes: 407176,
    alt: {
      ar: 'أشجار نخيل باسقة في فناء الفيلا',
      en: 'Tall palm trees in villa grounds',
    },
  },
  {
    id: '00',
    file: '/media/img/plate-00-v1.jpg',
    width: 720,
    height: 731,
    ratio: '1:1',
    focus: '50% 50%',
    chapter: 4,
    maxRender: 360,
    publish: true,
    sizeBytes: 230172,
    alt: {
      ar: 'غرس النخيل والعناية الدورية به',
      en: 'Palm planting and care',
    },
  },
  {
    id: '23',
    file: '/media/img/plate-23-v1.jpg',
    width: 517,
    height: 517,
    ratio: '1:1',
    focus: '50% 50%',
    chapter: 4,
    maxRender: 260,
    publish: true,
    sizeBytes: 67692,
    alt: {
      ar: 'نخيل واشنطونيا في حديقة سكنية',
      en: 'Washingtonia palms in residential garden',
    },
  },
];

export const films: Film[] = [
  {
    id: '01',
    file: '/media/video/film-01-v1.mp4',
    poster: '/media/poster/film-01-v1.jpg',
    width: 478,
    height: 850,
    aspect: '9:16',
    duration: 14,
    locales: ['ar', 'en'],
    publish: true,
    sizeBytes: 922457,
    posterSizeBytes: 23789,
  },
  {
    id: '02',
    file: '/media/video/film-02-v1.mp4',
    poster: '/media/poster/film-02-v1.jpg',
    width: 476,
    height: 848,
    aspect: '9:16',
    duration: 25,
    locales: ['ar', 'en'],
    publish: true,
    sizeBytes: 1827203,
    posterSizeBytes: 31488,
  },
  {
    id: '03',
    file: '/media/video/film-03-v1.mp4',
    poster: '/media/poster/film-03-v1.jpg',
    width: 478,
    height: 850,
    aspect: '9:16',
    duration: 54,
    locales: ['ar', 'en'],
    publish: true,
    sizeBytes: 6195899,
    posterSizeBytes: 78173,
  },
  {
    id: '04',
    file: '/media/video/film-04-v1.mp4',
    poster: '/media/poster/film-04-v1.jpg',
    width: 478,
    height: 850,
    aspect: '9:16',
    duration: 22,
    locales: ['ar'], // burned-in Arabic caption, hidden on /en
    publish: true,
    sizeBytes: 1546245,
    posterSizeBytes: 43385,
  },
  {
    id: '05',
    file: '/media/video/film-05-v1.mp4',
    poster: '/media/poster/film-05-v1.jpg',
    width: 480,
    height: 480,
    aspect: '1:1',
    duration: 14,
    locales: ['ar', 'en'],
    publish: true,
    sizeBytes: 1036106,
    posterSizeBytes: 56371,
  },
  {
    id: '06',
    file: '/media/video/film-06-v1.mp4',
    poster: '/media/poster/film-06-v1.jpg',
    width: 352,
    height: 640,
    aspect: '9:16',
    duration: 35,
    locales: ['ar', 'en'],
    publish: true,
    sizeBytes: 3961894,
    posterSizeBytes: 30557,
  },
];

export const heroPlate01 = plates.find((p) => p.id === '42')!;
export const heroPlate02 = plates.find((p) => p.id === '27') || plates.find((p) => p.id === '43')!;
export const aboutPlate = plates.find((p) => p.id === '31')!;

export const homePlateIds = ['03', '07', '27', '17', '10', '36', '40', '15'];
export const homePlates = homePlateIds
  .map((id) => plates.find((p) => p.id === id))
  .filter((p): p is Plate => Boolean(p && p.publish));

export const chapters = [
  {
    numeral: '01',
    chapter: 1,
    title: {
      ar: 'المسطحات والممرات',
      en: 'Lawns and paths',
    },
    plates: plates.filter((p) => p.chapter === 1 && p.publish),
  },
  {
    numeral: '02',
    chapter: 2,
    title: {
      ar: 'الزهور والأسوار النباتية',
      en: 'Flowers and borders',
    },
    plates: plates.filter((p) => p.chapter === 2 && p.publish),
  },
  {
    numeral: '03',
    chapter: 3,
    title: {
      ar: 'الجدران والأحواض والواجهات',
      en: 'Walls, planters and façades',
    },
    plates: plates.filter((p) => p.chapter === 3 && p.publish),
  },
  {
    numeral: '04',
    chapter: 4,
    title: {
      ar: 'النخيل',
      en: 'Palms',
    },
    plates: plates.filter((p) => p.chapter === 4 && p.publish),
  },
];
