import 'dotenv/config';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { AppDataSource } from '../data-source';
import { MatchType, winnerType } from '../core/enum/enum';
import { Entitybook } from '../features/Languges/entities/book-category.entities';
import { AuthorsEntities } from '../features/authors/entities/authors.entities';
import { BooksEntity } from '../features/books/entities/books.entities';
import { ColorsEntities } from '../features/colors/entities/colors.entities';
import { CountriesEntities } from '../features/countries/entities/countries.entities';
import { CourseCategoriesEntities } from '../features/courseCategories/entities/courseCategories.entities';
import { CoursesEntities } from '../features/courses/entities/courses.entities';
import { DifficultiesEntities } from '../features/difficulties/entities/difficulties.entities';
import { LanguagesEntities } from '../features/languages/entities/languages.entities';
import { MatchesEntities } from '../features/matches/entities/matches.entities';
import { NewsEntities } from '../features/news/entities/news.entities';
import { PlayersEntities } from '../features/players/entities/players.entities';
import { ReportCategoriesEntities } from '../features/reportCategories/entities/reportCategories.entities';
import { SouvenirColorsEntity } from '../features/souvenirColors/entities/souvenirColors.entities';
import { SouvenirImagesEntity } from '../features/souvenirImages/entities/souvenirImages.entities';
import { SouvenirsEntities } from '../features/souvenirs/entities/souvenirs.entities';
import { TermsEntity } from '../features/terms/entities/terms.entities';

// Ma'lumotlar Figma'dagi UzChess dizayni bilan bir xil (Asosiy, Kurslar, Kutubxona, Yangiliklar).
// Rasmlar uploads/image/ papkasida, Figma eksportidan olingan.
//
// Seed qayta ishga tushirilsa ham dublikat yaratmaydi:
// har bir yozuv `where` bo'yicha qidiriladi, topilsa Figma qiymatlariga yangilanadi, topilmasa yaratiladi.
// `npm run seed -- --reset` kontent jadvallarini tozalab, faqat Figma ma'lumotlarini qoldiradi.

type EntityClass<T extends BaseEntity> = { new (): T } & typeof BaseEntity;

async function ensure<T extends BaseEntity>(
  entity: EntityClass<T>,
  where: FindOptionsWhere<T>,
  data: Partial<T>,
): Promise<T> {
  const repo = AppDataSource.getRepository<T>(entity);
  const existing = await repo.findOne({ where });
  if (existing) return repo.save(repo.merge(existing, data as T));
  return repo.save(repo.create({ ...where, ...data } as T));
}

const IMG = (name: string) => `uploads/image/${name}`;
const ICON = (name: string) => `uploads/file/${name}`;
const FLAG = (code: string) => `https://flagcdn.com/w80/${code}.png`;

const CONTENT_TABLES = [
  'books', 'courses', 'course_sections', 'course_lessons', 'authors', 'book-categories',
  'coursesCategories', 'difficulties', 'Languages', 'countries', 'players', 'Matches', 'News',
];

async function resetContent() {
  const tables = CONTENT_TABLES.map((t) => `"${t}"`).join(', ');
  await AppDataSource.query(`TRUNCATE ${tables} RESTART IDENTITY`);
  console.log('Kontent jadvallari tozalandi');
}

const byTitle = async <T extends BaseEntity>(entity: EntityClass<T>, titles: string[], extra = (_: string) => ({})) => {
  const result: Record<string, T> = {};
  for (const title of titles) {
    result[title] = await ensure(entity, { title } as any, extra(title));
  }
  return result;
};

async function seedDictionaries() {
  const bookCategories = await byTitle(Entitybook, ['Tarix', 'Adabiyot', 'Matematika']);
  const courseCategories = await byTitle(CourseCategoriesEntities, ['Strategiya', 'Hujum qilish', 'Himoyalanish', 'Qoidalar']);

  const languages = {
    uz: await ensure(LanguagesEntities, { code: 'uz' }, { title: 'O‘zbek' }),
    ru: await ensure(LanguagesEntities, { code: 'ru' }, { title: 'Русский' }),
  };

  const difficulties = {
    beginner: await ensure(DifficultiesEntities, { title: 'Boshlang‘ich' }, { icon: ICON('file_1789505070316.svg') }),
    amateur: await ensure(DifficultiesEntities, { title: 'Havaskor' }, { icon: ICON('file_1789505433990.svg') }),
    pro: await ensure(DifficultiesEntities, { title: 'Professional' }, { icon: ICON('file_1789505700736.svg') }),
  };

  const countries = {};
  for (const [title, code] of [
    ['O‘zbekiston', 'uz'],
    ['Norvegiya', 'no'],
    ['AQSH', 'us'],
    ['Xitoy', 'cn'],
    ['Armaniston', 'am'],
    ['Vengriya', 'hu'],
    ['Isroil', 'il'],
  ]) {
    countries[code] = await ensure(CountriesEntities, { title }, { flag: FLAG(code) });
  }

  for (const [title, color] of [
    ['Oq', '#FFFFFF'],
    ['Qora', '#000000'],
    ['Jigarrang', '#8B4513'],
    ['Kulrang', '#808080'],
  ]) {
    await ensure(ColorsEntities, { title }, { color });
  }

  for (const [order, title] of ['Spam', "Haqoratli so'zlar", "Noto'g'ri ma'lumot", 'Boshqa'].entries()) {
    await ensure(ReportCategoriesEntities, { title }, { order: order + 1 });
  }

  return { bookCategories, courseCategories, languages, difficulties, countries };
}

type Dictionaries = Awaited<ReturnType<typeof seedDictionaries>>;

const author = (fullName: string) => ensure(AuthorsEntities, { fullName }, {});

// Figma: Education / Courses
async function seedCourses(d: Dictionaries) {
  const courses = [
    {
      title: 'Shaxmat donalari bilan tanishuv', author: 'Robert Fisher', image: 'course-shaxmat-donalari.png',
      price: 205000, newPrice: 96000, rating: 3.5, language: d.languages.ru,
      difficulty: d.difficulties.beginner, sectionsCount: 5, category: 'Strategiya',
    },
    {
      title: 'Shoxga hujum qilish', author: 'Andre Konfutsiy', image: 'course-shoxga-hujum.png',
      price: 96000, newPrice: null, rating: 5.0, language: d.languages.uz,
      difficulty: d.difficulties.beginner, sectionsCount: 6, category: 'Hujum qilish',
    },
    {
      title: 'Mot qilish', author: 'David Harikon', image: 'course-mot-qilish.png',
      price: 150000, newPrice: 107000, rating: 4.5, language: d.languages.ru,
      difficulty: d.difficulties.pro, sectionsCount: 20, category: 'Himoyalanish',
    },
    {
      title: 'Asosiy taktikalar', author: 'Paul Heckler', image: 'course-asosiy-taktikalar.png',
      price: 0, newPrice: null, rating: 5.0, language: d.languages.uz,
      difficulty: d.difficulties.amateur, sectionsCount: 7, category: 'Qoidalar',
    },
  ];

  for (const c of courses) {
    await ensure(
      CoursesEntities,
      { title: c.title },
      {
        authorId: (await author(c.author)).id,
        categoryId: d.courseCategories[c.category].id,
        languageId: c.language.id,
        difficultyId: c.difficulty.id,
        image: IMG(c.image),
        price: c.price,
        newPrice: c.newPrice ?? undefined,
        isPublished: true,
        rating: c.rating,
        reviewsCount: 0,
        sectionsCount: c.sectionsCount,
        lessonsCount: 0,
      },
    );
  }
}

// Figma: Library
async function seedBooks(d: Dictionaries) {
  const books = [
    {
      title: 'Bobbi Fisher shaxmatni o‘ynashni o‘rganing', author: 'Robert Fisher', image: 'book-fischer-teaches-chess.svg',
      price: 205000, newPrice: 155000, language: d.languages.ru, difficulty: d.difficulties.beginner, category: 'Tarix',
      description: 'Bobbi Fisherning shaxmatni o‘rgatuvchi dasturlashtirilgan darsligi.',
    },
    {
      title: 'Bobbi Fisher shaxmatni o‘ynashni o‘rganing', author: 'Jonatan Dez', image: 'book-silman-reassess.svg',
      price: 180000, newPrice: 0, language: d.languages.uz, difficulty: d.difficulties.amateur, category: 'Adabiyot',
      description: 'Shaxmatdagi qobiliyatlaringizga qayta baho berish bo‘yicha qo‘llanma.',
    },
    {
      title: 'Mening tizimim', author: 'Andre Miladze', image: 'book-my-system.svg',
      price: 0, newPrice: 0, language: d.languages.ru, difficulty: d.difficulties.amateur, category: 'Matematika',
      description: 'Pozitsion o‘yin tamoyillari haqidagi klassik kitob.',
    },
    {
      title: 'Zurixdagi shaxmat musobaqasi', author: 'David Bronstein', image: 'book-zurich-1953.svg',
      price: 120000, newPrice: 0, language: d.languages.uz, difficulty: d.difficulties.pro, category: 'Tarix',
      description: '1953-yilgi Zurix turniri partiyalarining tahlili.',
    },
    {
      title: 'Mening esdaqolarlik o‘yinlarim', author: 'Mikhail Litvin', image: 'book-fischer-60-games.svg',
      price: 200000, newPrice: 189000, language: d.languages.ru, difficulty: d.difficulties.beginner, category: 'Matematika',
      description: 'Bobbi Fisherning 60 ta esda qolarli partiyasi.',
    },
  ];

  for (const b of books) {
    const authorId = (await author(b.author)).id;
    await ensure(
      BooksEntity,
      { title: b.title, authorId },
      {
        categoryId: d.bookCategories[b.category].id,
        languageId: b.language.id,
        difficultyId: b.difficulty.id,
        description: b.description,
        image: IMG(b.image),
        price: b.price,
        newPrice: b.newPrice,
        rating: 3.5,
        reviewsCount: 0,
        pages: 250,
        pubDate: '2022-09-07' as unknown as number,
      },
    );
  }
}

// Figma: Main — Reyting va Yakunlangan o'yinlar.
// classic — Reyting ro'yxati; rapid/blitz — o'yinlar jadvalida o'yin turiga qarab ko'rsatiladi.
async function seedPlayers(countries) {
  const players = [
    ['Magnus Carlsen', 'no', 2861, null, null, 'player-carlsen.svg'],
    ['Hikaru Nakamura', 'us', 2850, 2768, null],
    ['Abdusattorov Nodirbek', 'uz', 2842, null, 2604],
    ['Sindarov Javokhir', 'uz', 2839, null, 2641],
    ['Yakubboev Nodirbek', 'uz', 2839, null, 2402],
    ['Shohrukh Bakhtiyarov', 'uz', 2600, 2861, null],
    ['Ding Liren', 'cn', 2750, null, 2312],
    ['Aronian Levon', 'us', 2730, null, 2402],
    ['Caruana Fabiano', 'us', 2790, null, 2402],
    ['Rapport Richard', 'hu', 2720, null, 2641],
    ['Gelfand Boris', 'il', 2670, null, 2641],
  ] as const;

  const result: Record<string, PlayersEntities> = {};
  for (const [fulName, code, classic, rapid, blitz, image] of players) {
    result[fulName] = await ensure(
      PlayersEntities,
      { fulName },
      {
        countryId: countries[code].id,
        image: IMG(image ?? 'player-default.svg'),
        classic,
        rapid: rapid ?? undefined,
        blitz: blitz ?? undefined,
      },
    );
  }
  return result;
}

async function seedMatches(players: Record<string, PlayersEntities>) {
  const matches: [string, number, string, number, MatchType, number, winnerType, string][] = [
    ['Shohrukh Bakhtiyarov', 2, 'Hikaru Nakamura', 0, MatchType.Rapid, 56, winnerType.first, '2025-12-12'],
    ['Abdusattorov Nodirbek', 1, 'Ding Liren', 0, MatchType.Bullet, 20, winnerType.first, '2025-11-21'],
    ['Aronian Levon', 0, 'Sindarov Javokhir', 2, MatchType.Blitz, 19, winnerType.second, '2025-10-19'],
    ['Caruana Fabiano', 1, 'Rapport Richard', 1, MatchType.Blitz, 56, winnerType.draw, '2025-09-02'],
    ['Yakubboev Nodirbek', 4, 'Gelfand Boris', 1, MatchType.Bullet, 56, winnerType.first, '2025-09-01'],
  ];

  for (const [first, firstPlayerResult, second, secondPlayerResult, type, moves, winner, date] of matches) {
    await ensure(
      MatchesEntities,
      { firstPlayer: players[first].id, secondPlayer: players[second].id, date },
      { firstPlayerResult, secondPlayerResult, type, moves, winner },
    );
  }
}

// Figma: Main / News
async function seedNews() {
  const news = [
    {
      title: 'Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi',
      image: IMG('news-abdusattorov-2700.png'),
      content:
        'O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reytingida 2700 balldan o‘tdi.',
      date: '2022-09-07T12:00:00Z',
    },
    {
      title: '“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alabasi haqida',
      image: IMG('news-shipov.png'),
      content:
        'Rossiyalik grossmeyster va shaxmat bo‘yicha murabbiy Sergey Shipov O‘zbekiston terma jamoasining Hindistondagi shaxmat olimpiadasidagi o‘yinlari haqida fikr bildirdi.',
      date: '2022-09-07T11:00:00Z',
    },
    {
      title: 'Xalqaro shaxmat musobaqalari g‘oliblariga nima beriladi?',
      image: IMG('news-sovrinlar.png'),
      content:
        'O‘zbekiston Prezidenti Shavkat Mirziyoyevning “Shaxmatni yanada ommalashtirish va rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi qarori bilan xalqaro musobaqalar g‘oliblarini rag‘batlantirish tartibi belgilandi.',
      date: '2022-09-07T10:00:00Z',
    },
    {
      title: 'O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi',
      image: IMG('news-olimpiada.png'),
      content: [
        'Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.',
        'TOSHKENT, 7 avgust – #sputnik. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.',
        'Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.',
        'Bungacha o‘zbekistonlik badmintonchilar “Osiyo bolalari” xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.',
      ].join('\n\n'),
      date: '2022-09-07T09:00:00Z',
    },
  ];

  for (const n of news) {
    await ensure(NewsEntities, { title: n.title }, { image: n.image, content: n.content, date: new Date(n.date) });
  }
}

async function seedSouvenirs() {
  const colors = await AppDataSource.getRepository(ColorsEntities).find();
  const colorId = (title: string) => colors.find((c) => c.title === title)!.id;

  const souvenirs = [
    {
      title: "Yog'och shaxmat to'plami",
      description: "Qo'lda ishlangan yog'och taxta va donalar, 40x40 sm. Sovg'a qutisida.",
      price: 450000,
      colors: ['Jigarrang'],
      images: ['image_1789505752731.png'],
    },
    {
      title: 'Raqamli shaxmat soati',
      description: "Turnirlar uchun FIDE rejimlarini qo'llab-quvvatlaydigan raqamli soat.",
      price: 280000,
      colors: ['Qora'],
      images: ['image_1789505987315.png'],
    },
    {
      title: 'UzChess futbolkasi',
      description: '100% paxta, UzChess logotipi bilan. S, M, L, XL o\'lchamlari mavjud.',
      price: 120000,
      colors: ['Oq', 'Qora', 'Kulrang'],
      images: ['image_1789505969642.png'],
    },
    {
      title: 'Shaxmat krujkasi',
      description: 'Ot donasi tasvirlangan keramik krujka, 350 ml.',
      price: 65000,
      colors: ['Oq', 'Qora'],
      images: ['image_1789505687501.png'],
    },
  ];

  for (const s of souvenirs) {
    const souvenir = await ensure(SouvenirsEntities, { title: s.title }, { description: s.description, price: s.price });
    for (const color of s.colors) {
      await ensure(SouvenirColorsEntity, { souvenirId: souvenir.id, colorId: colorId(color) }, {});
    }
    for (const image of s.images) {
      await ensure(SouvenirImagesEntity, { souvenirId: souvenir.id, image: IMG(image) }, {});
    }
  }
}

async function seedTerms() {
  const count = await AppDataSource.getRepository(TermsEntity).count();
  if (count > 0) return;
  await AppDataSource.getRepository(TermsEntity).save({
    content: [
      "1. UzChess platformasidan foydalanish orqali siz ushbu qoidalarga rozilik bildirasiz.",
      "2. Sotib olingan kurslar faqat shaxsiy foydalanish uchun mo'ljallangan, ularni tarqatish taqiqlanadi.",
      "3. Izohlarda haqoratli so'zlar va spam ishlatish taqiqlanadi, bunday izohlar o'chiriladi.",
      "4. Shaxsiy ma'lumotlaringiz uchinchi shaxslarga berilmaydi.",
    ].join('\n'),
  });
}

async function main() {
  await AppDataSource.initialize();
  try {
    if (process.argv.includes('--reset')) await resetContent();
    const dictionaries = await seedDictionaries();
    await seedCourses(dictionaries);
    await seedBooks(dictionaries);
    const players = await seedPlayers(dictionaries.countries);
    await seedMatches(players);
    await seedNews();
    await seedSouvenirs();
    await seedTerms();
    console.log('Seed muvaffaqiyatli yakunlandi');
  } finally {
    await AppDataSource.destroy();
  }
}

main().catch((err) => {
  console.error('Seed xatosi:', err);
  process.exit(1);
});
