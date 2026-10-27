import { MigrationInterface, QueryRunner } from "typeorm";

export class MatchTypeBullet1793112000000 implements MigrationInterface {
    name = 'MatchTypeBullet1793112000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."Matches_type_enum" ADD VALUE IF NOT EXISTS '3'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // PostgreSQL enum qiymatini olib tashlashni qo'llab-quvvatlamaydi.
    }
}
