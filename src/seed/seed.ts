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
import { CourseLessonsEntity } from '../features/courseLessons/entities/courseLessons.entities';
import { CourseSectionsEntity } from '../features/courseSections/entities/courseSections.entities';
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

// Seed qayta ishga tushirilsa ham dublikat yaratmaydi:
// har bir yozuv `where` bo'yicha qidiriladi, topilmasa yaratiladi.
type EntityClass<T extends BaseEntity> = { new (): T } & typeof BaseEntity;

async function ensure<T extends BaseEntity>(
  entity: EntityClass<T>,
  where: FindOptionsWhere<T>,
  data: Partial<T>,
): Promise<T> {
  const repo = AppDataSource.getRepository<T>(entity);
  const existing = await repo.findOne({ where });
  if (existing) return existing;
  return repo.save(repo.create({ ...where, ...data } as T));
}

const IMG = (name: string) => `uploads/image/${name}`;
const ICON = (name: string) => `uploads/file/${name}`;
const FLAG = (code: string) => `https://flagcdn.com/w80/${code}.png`;

async function seedDictionaries() {
  const bookCategories = {};
  for (const title of ['Debyut', 'Mittelshpil', 'Endshpil', 'Taktika', 'Strategiya', 'Shaxmat tarixi']) {
    bookCategories[title] = await ensure(Entitybook, { title }, {});
  }

  const courseCategories = {};
  for (const title of ["Boshlang'ich", 'Taktika', 'Debyut nazariyasi', 'Endshpil']) {
    courseCategories[title] = await ensure(CourseCategoriesEntities, { title }, {});
  }

  const languages = {
    uz: await ensure(LanguagesEntities, { code: 'uz' }, { title: "O'zbekcha" }),
    ru: await ensure(LanguagesEntities, { code: 'ru' }, { title: 'Русский' }),
    en: await ensure(LanguagesEntities, { code: 'en' }, { title: 'English' }),
  };

  const difficulties = {
    easy: await ensure(DifficultiesEntities, { title: "Boshlang'ich" }, { icon: ICON('file_1789505070316.svg') }),
    medium: await ensure(DifficultiesEntities, { title: "O'rta" }, { icon: ICON('file_1789505433990.svg') }),
    hard: await ensure(DifficultiesEntities, { title: 'Yuqori' }, { icon: ICON('file_1789505700736.svg') }),
  };

  const countries = {};
  for (const [title, code] of [
    ["O'zbekiston", 'uz'],
    ['Norvegiya', 'no'],
    ['AQSH', 'us'],
    ['Hindiston', 'in'],
    ['Xitoy', 'cn'],
    ['Rossiya', 'ru'],
    ['Fransiya', 'fr'],
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

async function seedAuthors() {
  const authors = {};
  for (const fullName of [
    'Anatoly Karpov',
    'Garri Kasparov',
    'Xose Raul Kapablanka',
    'Mixail Tal',
    'Bobby Fischer',
    'Rustam Qosimjonov',
  ]) {
    authors[fullName] = await ensure(AuthorsEntities, { fullName }, {});
  }
  return authors;
}

async function seedBooks(d: Awaited<ReturnType<typeof seedDictionaries>>, authors) {
  const books = [
    {
      title: 'Shaxmat asoslari',
      author: 'Xose Raul Kapablanka',
      category: 'Strategiya',
      difficulty: d.difficulties.easy,
      description:
        "Jahon chempioni Kapablankaning klassik qo'llanmasi: oddiy endshpillardan boshlab o'rta o'yin rejalari va debyut tamoyillarigacha.",
      image: IMG('image_1789501137374.png'),
      price: 89000,
      newPrice: 69000,
      rating: 4.8,
      reviewsCount: 124,
      pages: 240,
      pubDate: '2023-03-12',
    },
    {
      title: 'Mening buyuk o\'tmishdoshlarim',
      author: 'Garri Kasparov',
      category: 'Shaxmat tarixi',
      difficulty: d.difficulties.hard,
      description:
        "Kasparov jahon chempionlarining eng yaxshi partiyalarini tahlil qiladi va shaxmat g'oyalarining rivojlanishini ko'rsatadi.",
      image: IMG('image_1789505070313.png'),
      price: 159000,
      newPrice: 129000,
      rating: 4.9,
      reviewsCount: 87,
      pages: 464,
      pubDate: '2022-09-01',
    },
    {
      title: 'Taktika sirlari',
      author: 'Mixail Tal',
      category: 'Taktika',
      difficulty: d.difficulties.medium,
      description: "Kombinatsiyalar, qurbonliklar va hujum usullari. Har bir bobda mustaqil yechish uchun mashqlar bor.",
      image: IMG('image_1789505433990.png'),
      price: 75000,
      newPrice: 75000,
      rating: 4.7,
      reviewsCount: 63,
      pages: 312,
      pubDate: '2024-01-20',
    },
    {
      title: "Bobby Fischer shaxmatni o'rgatadi",
      author: 'Bobby Fischer',
      category: 'Taktika',
      difficulty: d.difficulties.easy,
      description: "Mot qilish usullarini bosqichma-bosqich o'rgatadigan dasturlashtirilgan darslik.",
      image: IMG('image_1789505700735.png'),
      price: 65000,
      newPrice: 49000,
      rating: 4.6,
      reviewsCount: 210,
      pages: 336,
      pubDate: '2021-06-15',
    },
    {
      title: 'Endshpil ustasi',
      author: 'Anatoly Karpov',
      category: 'Endshpil',
      difficulty: d.difficulties.hard,
      description: "Piyodali va rux endshpillarining asosiy pozitsiyalari, ularni amalda qo'llash bo'yicha maslahatlar.",
      image: IMG('image_1789505752731.png'),
      price: 99000,
      newPrice: 85000,
      rating: 4.8,
      reviewsCount: 45,
      pages: 288,
      pubDate: '2023-11-05',
    },
    {
      title: 'Debyutlar repertuari',
      author: 'Rustam Qosimjonov',
      category: 'Debyut',
      difficulty: d.difficulties.medium,
      description: "Oq va qora donalar uchun ishonchli debyut tizimi: Italyan partiyasi, Sitsiliya himoyasi va Ferzli gambit.",
      image: IMG('image_1789505969642.png'),
      price: 82000,
      newPrice: 82000,
      rating: 4.5,
      reviewsCount: 38,
      pages: 256,
      pubDate: '2024-04-10',
    },
  ];

  for (const b of books) {
    await ensure(
      BooksEntity,
      { title: b.title },
      {
        authorId: authors[b.author].id,
        categoryId: d.bookCategories[b.category].id,
        languageId: d.languages.uz.id,
        difficultyId: b.difficulty.id,
        description: b.description,
        image: b.image,
        price: b.price,
        newPrice: b.newPrice,
        rating: b.rating,
        reviewsCount: b.reviewsCount,
        pages: b.pages,
        pubDate: b.pubDate as unknown as number,
      },
    );
  }
}

async function seedCourses(d: Awaited<ReturnType<typeof seedDictionaries>>, authors) {
  const courses = [
    {
      title: "Shaxmatni noldan o'rganish",
      author: 'Rustam Qosimjonov',
      category: "Boshlang'ich",
      difficulty: d.difficulties.easy,
      image: IMG('image_1789496643023.png'),
      price: 0,
      newPrice: null,
      rating: 4.9,
      reviewsCount: 342,
      sections: {
        'Shaxmat taxtasi va donalar': ['Taxta va koordinatalar', 'Donalarning yurishi', 'Maxsus yurishlar: rokirovka va en passant'],
        "O'yin maqsadi": ['Shox, mot va pat', 'Birinchi partiyangiz'],
      },
    },
    {
      title: 'Taktik kombinatsiyalar',
      author: 'Mixail Tal',
      category: 'Taktika',
      difficulty: d.difficulties.medium,
      image: IMG('image_1789501069276.png'),
      price: 249000,
      newPrice: 199000,
      rating: 4.8,
      reviewsCount: 128,
      sections: {
        'Asosiy taktik usullar': ['Vilka', "Bog'lash", 'Ochiq hujum'],
        'Murakkab kombinatsiyalar': ['Qurbonlik orqali hujum', "Shohga yo'naltirilgan hujum"],
      },
    },
    {
      title: 'Debyut nazariyasi: Italyan partiyasi',
      author: 'Garri Kasparov',
      category: 'Debyut nazariyasi',
      difficulty: d.difficulties.medium,
      image: IMG('image_1789505687501.png'),
      price: 189000,
      newPrice: 149000,
      rating: 4.7,
      reviewsCount: 76,
      sections: {
        'Debyut tamoyillari': ['Markazni nazorat qilish', 'Donalarni rivojlantirish'],
        'Italyan partiyasi': ['Asosiy variant', 'Giuoco Pianissimo', 'Evans gambiti'],
      },
    },
    {
      title: 'Endshpil texnikasi',
      author: 'Anatoly Karpov',
      category: 'Endshpil',
      difficulty: d.difficulties.hard,
      image: IMG('image_1789505978619.png'),
      price: 299000,
      newPrice: 239000,
      rating: 4.9,
      reviewsCount: 54,
      sections: {
        'Piyodali endshpil': ['Oppozitsiya', 'Kvadrat qoidasi'],
        'Rux endshpili': ['Lusena pozitsiyasi', 'Filidor pozitsiyasi'],
      },
    },
  ];

  for (const c of courses) {
    const lessonsCount = Object.values(c.sections).flat().length;
    const course = await ensure(
      CoursesEntities,
      { title: c.title },
      {
        authorId: authors[c.author].id,
        categoryId: d.courseCategories[c.category].id,
        languageId: d.languages.uz.id,
        difficultyId: c.difficulty.id,
        image: c.image,
        price: c.price,
        newPrice: c.newPrice ?? undefined,
        isPublished: true,
        rating: c.rating,
        reviewsCount: c.reviewsCount,
        sectionsCount: Object.keys(c.sections).length,
        lessonsCount,
      },
    );

    let lessonOrder = 0;
    for (const [sectionOrder, [sectionTitle, lessons]] of Object.entries(c.sections).entries()) {
      const section = await ensure(
        CourseSectionsEntity,
        { courseId: course.id, title: sectionTitle },
        { order: sectionOrder + 1, date: new Date() },
      );
      for (const title of lessons) {
        lessonOrder++;
        await ensure(
          CourseLessonsEntity,
          { courseSectionId: section.id, title },
          {
            courseId: course.id,
            content: `${title} mavzusi bo'yicha video dars va mashqlar.`,
            thumbnail: c.image,
            video: `uploads/video/course-${course.id}-lesson-${lessonOrder}.mp4`,
            order: lessonOrder,
            date: new Date(),
            isFree: lessonOrder <= 2,
          },
        );
      }
    }
  }
}

async function seedPlayers(countries) {
  // Reytinglar taxminiy, faqat demo uchun.
  const players = [
    ['Magnus Carlsen', 'no', 2830, 2820, 2880],
    ['Nodirbek Abdusattorov', 'uz', 2770, 2750, 2760],
    ['Hikaru Nakamura', 'us', 2800, 2790, 2900],
    ['Javokhir Sindarov', 'uz', 2730, 2700, 2710],
    ['Gukesh Dommaraju', 'in', 2780, 2720, 2700],
    ['Ding Liren', 'cn', 2740, 2730, 2750],
    ['Nodirbek Yakubboev', 'uz', 2690, 2670, 2680],
    ['Ian Nepomniachtchi', 'ru', 2760, 2770, 2800],
    ['Alireza Firouzja', 'fr', 2760, 2740, 2820],
    ['Shamsiddin Vokhidov', 'uz', 2650, 2640, 2660],
  ] as const;

  const images = ['image_1789496643025.png', 'image_1789501069278.png', 'image_1789501137375.png', 'image_1789505987315.png'];
  const result = {};
  for (const [i, [fulName, code, classic, rapid, blitz]] of players.entries()) {
    result[fulName] = await ensure(
      PlayersEntities,
      { fulName },
      { countryId: countries[code].id, image: IMG(images[i % images.length]), classic, rapid, blitz },
    );
  }
  return result;
}

async function seedMatches(players) {
  const matches: [string, string, MatchType, number, winnerType, string][] = [
    ['Magnus Carlsen', 'Nodirbek Abdusattorov', MatchType.Classic, 54, winnerType.draw, '2026-09-14'],
    ['Javokhir Sindarov', 'Gukesh Dommaraju', MatchType.Rapid, 41, winnerType.first, '2026-09-20'],
    ['Hikaru Nakamura', 'Alireza Firouzja', MatchType.Blitz, 37, winnerType.second, '2026-10-02'],
    ['Nodirbek Yakubboev', 'Ding Liren', MatchType.Classic, 63, winnerType.draw, '2026-10-11'],
    ['Nodirbek Abdusattorov', 'Ian Nepomniachtchi', MatchType.Rapid, 48, winnerType.first, '2026-10-18'],
  ];

  for (const [first, second, type, moves, winner, date] of matches) {
    const score = { [winnerType.first]: [1, 0], [winnerType.second]: [0, 1], [winnerType.draw]: [0.5, 0.5] }[winner];
    await ensure(
      MatchesEntities,
      { firstPlayer: players[first].id, secondPlayer: players[second].id, date },
      {
        // Natija butun son ustunida saqlanadi: g'alaba 2, durang 1, mag'lubiyat 0.
        firstPlayerResult: score[0] * 2,
        secondPlayerResult: score[1] * 2,
        type,
        moves,
        winner,
      },
    );
  }
}

async function seedNews() {
  const news = [
    {
      title: 'UzChess platformasida yangi "Endshpil texnikasi" kursi',
      image: IMG('image_1789505978619.png'),
      content:
        "Platformamizga endshpil bo'yicha yangi kurs qo'shildi. Kurs piyodali va rux endshpillarining asosiy pozitsiyalarini o'z ichiga oladi.",
      date: '2026-10-20T10:00:00Z',
    },
    {
      title: "Haftalik onlayn turnir: ro'yxatdan o'tish ochildi",
      image: IMG('image_1789501069276.png'),
      content:
        "Har shanba kuni soat 20:00 da blits turniri o'tkaziladi. G'oliblar UzChess do'konidan sovg'alar va kurslarga chegirma oladi.",
      date: '2026-10-15T09:00:00Z',
    },
    {
      title: "Kutubxonaga 6 ta yangi kitob qo'shildi",
      image: IMG('image_1789501137374.png'),
      content:
        "Kapablanka, Kasparov va Karpov kitoblarining o'zbekcha nashrlari endi kutubxonada. Ayrim kitoblarga 30% gacha chegirma amal qiladi.",
      date: '2026-10-08T12:30:00Z',
    },
    {
      title: "Bolalar uchun shaxmat: bepul boshlang'ich kurs",
      image: IMG('image_1789496643023.png'),
      content:
        "\"Shaxmatni noldan o'rganish\" kursi butunlay bepul. Kurs donalarning yurishidan tortib birinchi partiyani o'ynashgacha o'rgatadi.",
      date: '2026-09-28T08:00:00Z',
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
    const dictionaries = await seedDictionaries();
    const authors = await seedAuthors();
    await seedBooks(dictionaries, authors);
    await seedCourses(dictionaries, authors);
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
