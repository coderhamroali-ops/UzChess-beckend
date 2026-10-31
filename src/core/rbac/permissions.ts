import { role } from '../enum/enum';

/**
 * RBAC — Role-Based Access Control
 *
 * Har bir admin resursi uchun ikki xil ruxsat bor:
 *   `<resurs>:read`  — ro'yxat va bitta yozuvni ko'rish (GET)
 *   `<resurs>:write` — yaratish, tahrirlash, o'chirish (POST/PATCH/PUT/DELETE)
 *
 * `/admin/<resurs>/...` yo'llari uchun kerakli ruxsat guard tomonidan
 * avtomatik aniqlanadi (GET → read, qolganlari → write). Boshqa holatlarda
 * `@Permissions(...)` dekoratori bilan aniq ko'rsatiladi.
 */

/** Kontent: kurslar, kitoblar, yangiliklar, ma'lumotnomalar */
export const CONTENT_RESOURCES = [
  'authors',
  'books',
  'book-categories',
  'languages',
  'colors',
  'countries',
  'courses',
  'coursecategories',
  'course-sections',
  'course-lessons',
  'difficulties',
  'news',
  'players',
  'matches',
  'souvenirs',
  'souvenir-colors',
  'souvenir-images',
  'terms',
  'report-categories',
] as const;

/** Moderatsiya: sharhlar va shikoyatlar */
export const MODERATION_RESOURCES = [
  'book-reviews',
  'course-reviews',
  'souvenir-reviews',
  'reports',
] as const;

/** Foydalanuvchi faolligi: layklar, ko'rishlar, savat, xaridlar, darslar */
export const ACTIVITY_RESOURCES = [
  'book-likes',
  'course-likes',
  'souvenirlikes',
  'news-views',
  'cart-items',
  'purchased-courses',
  'users-lessons',
] as const;

/** Xavfsizlik: foydalanuvchilar, rollar, OTP kodlar */
export const SECURITY_RESOURCES = ['users', 'roles', 'otp-codes'] as const;

export const ALL_RESOURCES = [
  ...CONTENT_RESOURCES,
  ...MODERATION_RESOURCES,
  ...ACTIVITY_RESOURCES,
  ...SECURITY_RESOURCES,
] as const;

export type Resource = (typeof ALL_RESOURCES)[number];
export type Action = 'read' | 'write';
export type Permission = `${Resource}:${Action}`;

const read = (list: readonly Resource[]): Permission[] =>
  list.map((r) => `${r}:read` as Permission);
const write = (list: readonly Resource[]): Permission[] =>
  list.map((r) => `${r}:write` as Permission);

export const ALL_PERMISSIONS: Permission[] = [
  ...read(ALL_RESOURCES),
  ...write(ALL_RESOURCES),
];

/**
 * Rol → ruxsatlar jadvali.
 *
 * superAdmin — hamma narsa, jumladan rollarni boshqarish va OTP kodlar.
 * admin      — kontent va moderatsiya to'liq; faollikni ko'radi va boshqaradi;
 *              foydalanuvchilarni boshqaradi (lekin admin/superAdmin tayinlay olmaydi).
 * moderator  — sharh va shikoyatlarni boshqaradi; kontent va foydalanuvchilarni faqat ko'radi.
 * user       — admin panelga kira olmaydi.
 */
export const ROLE_PERMISSIONS: Record<role, readonly Permission[]> = {
  [role.SUPER_ADMIN]: ALL_PERMISSIONS,
  [role.ADMIN]: [
    ...read(CONTENT_RESOURCES),
    ...write(CONTENT_RESOURCES),
    ...read(MODERATION_RESOURCES),
    ...write(MODERATION_RESOURCES),
    ...read(ACTIVITY_RESOURCES),
    ...write(ACTIVITY_RESOURCES),
    'users:read',
    'users:write',
    'roles:read',
  ],
  [role.MODERATOR]: [
    ...read(CONTENT_RESOURCES),
    ...read(MODERATION_RESOURCES),
    ...write(MODERATION_RESOURCES),
    'users:read',
  ],
  [role.USER]: [],
};

/** Rollar ierarxiyasi: katta son — kuchliroq rol */
export const ROLE_LEVEL: Record<role, number> = {
  [role.USER]: 0,
  [role.MODERATOR]: 1,
  [role.ADMIN]: 2,
  [role.SUPER_ADMIN]: 3,
};

export function permissionsOf(r: string | undefined): readonly Permission[] {
  return ROLE_PERMISSIONS[r as role] ?? [];
}

export function hasPermission(r: string | undefined, p: string): boolean {
  // superAdmin hamma narsaga, shu jumladan kelajakda qo'shiladigan resurslarga ham ruxsatga ega
  if (r === role.SUPER_ADMIN) return true;
  return permissionsOf(r).includes(p as Permission);
}

/** `actor` foydalanuvchi `target` rolini tayinlay oladimi yoki shu roldagi foydalanuvchini o'zgartira oladimi */
export function canManageRole(actor: string, target: string): boolean {
  if (actor === role.SUPER_ADMIN) return true;
  // admin faqat o'zidan kuchsiz rollar bilan ishlaydi (user, moderator)
  return (
    hasPermission(actor, 'users:write') &&
    ROLE_LEVEL[target as role] < ROLE_LEVEL[actor as role]
  );
}

/** Admin panelga kirish huquqi bor rollar */
export function isStaff(r: string | undefined): boolean {
  return ROLE_LEVEL[r as role] >= ROLE_LEVEL[role.MODERATOR];
}

/**
 * `/admin/Books/list` → `books`, `/admin/courseCategories/x` → `coursecategories`.
 * Admin bo'lmagan yo'l uchun `null`.
 */
export function resourceFromPath(path: string): string | null {
  const parts = path.split('?')[0].split('/').filter(Boolean);
  if (parts[0]?.toLowerCase() !== 'admin' || !parts[1]) return null;
  return parts[1].toLowerCase();
}

export function actionFromMethod(method: string): Action {
  return ['GET', 'HEAD', 'OPTIONS'].includes(method.toUpperCase())
    ? 'read'
    : 'write';
}
