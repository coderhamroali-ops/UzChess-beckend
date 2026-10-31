# RBAC (Role-Based Access Control)

## Rollar

| Rol | Kim | Nima qila oladi |
|---|---|---|
| `superAdmin` | Tizim egasi | Hamma narsa: rollarni tayinlash, OTP kodlar, barcha resurslar |
| `admin` | Administrator | Kontent va moderatsiya (o'qish/yozish), faollik ma'lumotlari, `user`/`moderator` foydalanuvchilarni boshqarish |
| `moderator` | Moderator | Sharh va shikoyatlarni boshqarish; kontent va foydalanuvchilarni faqat ko'rish |
| `user` | Oddiy foydalanuvchi | Admin panelga kira olmaydi; faqat o'z savati, layklari, xaridlari |

To'liq jadval: `src/core/rbac/permissions.ts` (`ROLE_PERMISSIONS`). Ishlab turgan tizimda: `GET /admin/roles/list`.

## Qanday ishlaydi

- Har bir `/admin/<resurs>/...` yo'li avtomatik himoyalanadi: `GET` uchun `<resurs>:read`, qolgan metodlar uchun `<resurs>:write` kerak.
- Aniq talab uchun dekoratorlar: `@Permissions('books:write')`, `@Roles(role.ADMIN)`, `@Auth()` (faqat token).
- Guard rolni tokendan emas, **bazadan** oladi: rol o'zgarsa yoki foydalanuvchi bloklansa, darhol kuchga kiradi.
- `admin` faqat o'zidan kuchsiz rollarni (user, moderator) yarata/tahrirlay/o'chira oladi. O'z rolini o'zgartirish va o'zini o'chirish taqiqlangan. Oxirgi superAdmin'ni pasaytirib bo'lmaydi.
- Rol tayinlash: `PATCH /admin/roles/assign/:userId` `{ "role": "moderator" }` (faqat superAdmin).
- `GET /auth/me` endi `permissions` va `isStaff` qaytaradi — frontend menyuni shunga qarab ko'rsatadi.

## Xavfsizlik tuzatishlari

- `GET /public/otp-codes/list` o'chirildi (hamma OTP kodlarni ko'rsatardi).
- `GET /public/users/list` endi faqat `id`, `fullName`, `profileImage` qaytaradi.
- Savat, layklar, xaridlar, dars progressi va shikoyatlar ro'yxati endi token talab qiladi va faqat joriy foydalanuvchiniki qaytadi.
- Login'dagi parol xeshini konsolga chiqaradigan loglar olib tashlandi.

## Ishga tushirish

1. `npm run migrate` — `users_role_enum` ga `moderator` va `superAdmin` qo'shiladi.
2. `.env` da `ADMIN_LOGIN` va `ADMIN_PASSWORD` — ilova ishga tushganda shu foydalanuvchi superAdmin bo'ladi.

## Test

`test/rbac.e2e.sh` — 31 ta tekshiruv (ilova `localhost:8000` da ishlab turishi kerak).
