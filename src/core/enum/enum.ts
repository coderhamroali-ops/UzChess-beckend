export enum MatchType {
  Classic,
  Rapid,
  Blitz,
}

export enum winnerType {
  first,
  second,
  draw,
}

/**
 * Foydalanuvchi rollari (eng kuchsizdan eng kuchliga).
 * Qaysi rol nima qila olishi `core/rbac/permissions.ts` dagi
 * ROLE_PERMISSIONS jadvalida belgilangan.
 */
export enum role {
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
}

export enum loginType {
  EMAIL = 'email',
  PHONE = 'phone',
}

export enum otpType {
  register,
  passwordReset,
  numberChange,
}

export enum cartItemType {
  BOOK = 'book',
  SOUVENIR = 'souvenir',
}

export enum reportType {
  BOOK_REVIEW = 'book_review',
  COURSE_REVIEW = 'course_review',
}
