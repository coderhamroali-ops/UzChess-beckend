# UzChess — Backend

UzChess — shaxmat o'rgatuvchi ta'lim platformasi uchun backend. Kurslar, video darslar,
sinov (o'yin) tarixi, kitoblar do'koni va foydalanuvchi boshqaruvini bitta API orqali
taqdim etadi.

## Texnologiyalar

- **NestJS** (TypeScript) — Vertical Slice arxitekturasi
- **PostgreSQL** + **TypeORM** — migratsiyalar orqali boshqariladi
- **JWT** — autentifikatsiya, **bcrypt** — parollarni хеш qilish
- **Docker / Docker Compose** — bitta buyruq bilan ishga tushirish
- **Swagger** — API hujjatlari

## Arxitektura

Loyiha **Vertical Slice** uslubida qurilgan: har bir feature (`src/features/<name>`)
o'zining entity, module va operatsiyalarini (`admin/`, `public/` controllerlar, har
biri o'z `handler` va `request` fayli bilan) o'z ichiga oladi.


## Autentifikatsiya va ruxsatlar (RBAC)

- `POST /auth/register` — ro'yxatdan o'tish, rol har doim `user` (mijoz o'zi rol
  bera olmaydi)
- `POST /auth/login` — JWT token qaytaradi
- `GET /auth/me` — token orqali o'zining ma'lumoti
- `/admin/*` yo'llarining barchasi faqat `admin` roli uchun ochiq
- `/public/*` yo'llari tokensiz ishlaydi
- Birinchi admin dastur birinchi marta ishga tushganda `.env` dagi
  `ADMIN_LOGIN` / `ADMIN_PASSWORD` asosida avtomatik yaratiladi

## Ishga tushirish (Docker, tavsiya etiladi)

1. `.env.example` faylini `.env` deb nusxalang va qiymatlarni to'ldiring
   (pastdagi "Muhit o'zgaruvchilari" bo'limiga qarang).
2. Ishga tushiring:
```bash
   docker compose up --build
```
3. API: `http://localhost:8000`
4. Swagger: `http://localhost:8000/swagger`

Backend ishga tushganda migratsiyalarni avtomatik bajaradi va birinchi adminni
yaratadi.

## Ishga tushirish (lokal, Docker'siz)

Kerakli: Node.js va ishlab turgan PostgreSQL.

```bash
npm ci
npm run build
npm run start:dev
```

`.env` dagi `DATABASE_URL` lokal Postgres'ga ko'rsatishi kerak.

## Muhit o'zgaruvchilari

| O'zgaruvchi | Tavsif |
|---|---|
| `DATABASE_URL` | PostgreSQL ulanish satri |
| `DB_PASSWORD` | Docker Compose ichidagi Postgres paroli |
| `JWT_SECRET` | JWT tokenlarini imzolash uchun tasodifiy, sir matn |
| `ADMIN_LOGIN` | Birinchi marta yaratiladigan adminning login/emaili |
| `ADMIN_PASSWORD` | Birinchi adminning paroli |

`.env` fayli hech qachon repoga commit qilinmaydi (`.gitignore` da).

## Migratsiya yaratish

Entity o'zgargach:

```bash
npm run generate
```

Yangi fayl `src/migrations/` ga qo'shiladi, uni ko'zdan kechirib commit qiling.

## Litsenziya

Shaxsiy/o'quv loyihasi.