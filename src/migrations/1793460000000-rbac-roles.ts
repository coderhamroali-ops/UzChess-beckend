import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * RBAC: users.role enum'iga yangi rollar qo'shiladi va eski
 * raqamli qiymatlar ('0','1','2') matnli rollarga aylantiriladi.
 */
export class RbacRoles1793460000000 implements MigrationInterface {
  name = 'RbacRoles1793460000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."users_role_enum" ADD VALUE IF NOT EXISTS 'moderator'`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."users_role_enum" ADD VALUE IF NOT EXISTS 'superAdmin'`,
    );
    await queryRunner.query(
      `UPDATE "users" SET "role" = 'user' WHERE "role" = '0'`,
    );
    await queryRunner.query(
      `UPDATE "users" SET "role" = 'admin' WHERE "role" = '1'`,
    );
    // Yangi enum qiymatini shu tranzaksiyada ishlatib bo'lmaydi, shuning uchun
    // eski superAdmin ('2') hozircha 'admin' bo'ladi; ADMIN_LOGIN foydalanuvchisi
    // ilova ishga tushganda avtomatik superAdmin qilinadi.
    await queryRunner.query(
      `UPDATE "users" SET "role" = 'admin' WHERE "role" = '2'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Postgres enum'dan qiymat o'chirib bo'lmaydi; rollarni xavfsiz holatga qaytaramiz
    await queryRunner.query(
      `UPDATE "users" SET "role" = 'admin' WHERE "role" = 'superAdmin'`,
    );
    await queryRunner.query(
      `UPDATE "users" SET "role" = 'user' WHERE "role" = 'moderator'`,
    );
  }
}
