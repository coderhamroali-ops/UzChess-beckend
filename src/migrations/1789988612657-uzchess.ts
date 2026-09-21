import { MigrationInterface, QueryRunner } from "typeorm";

export class Uzchess1789988612657 implements MigrationInterface {
    name = 'Uzchess1789988612657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(64) NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_likes" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "bookId" integer NOT NULL, CONSTRAINT "PK_2ceb2da6734680b1335c949e6e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_reviews" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "bookId" integer NOT NULL, "rating" integer NOT NULL, "comment" character varying(512), CONSTRAINT "PK_cf9cfb9b88fef89b9d747b513d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."cart_items_target_enum" AS ENUM('book', 'souvenir')`);
        await queryRunner.query(`CREATE TABLE "cart_items" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "target" "public"."cart_items_target_enum" NOT NULL, "targetId" integer NOT NULL, "quantity" integer NOT NULL DEFAULT '1', CONSTRAINT "PK_6fccf5ec03c172d27a28a82928b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "colors" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(128) NOT NULL, "color" character varying(10) NOT NULL, CONSTRAINT "UQ_e271c8fa9391b29979e3958146e" UNIQUE ("title"), CONSTRAINT "UQ_eb5c5063c1274699dc315aa0766" UNIQUE ("color"), CONSTRAINT "PK_3a62edc12d29307872ab1777ced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "languageId" integer NOT NULL, "difficultyId" integer NOT NULL, "title" character varying(128) NOT NULL, "description" text NOT NULL, "image" character varying(128) NOT NULL, "price" numeric(12,2) NOT NULL, "newPrice" numeric(12,2) NOT NULL, "rating" numeric(12,1) NOT NULL, "reviewsCount" integer NOT NULL DEFAULT '0', "pages" integer NOT NULL, "pubDate" date NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64), "flag" character varying(128), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coursesCategories" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "UQ_d255347ecaf8d727ddbb2c86ca5" UNIQUE ("title"), CONSTRAINT "PK_3430534a758f7e482170974091c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_lessons" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "courseId" integer NOT NULL, "courseSectionId" integer NOT NULL, "title" character varying(128) NOT NULL, "content" text, "thumbnail" character varying(128), "video" character varying(256) NOT NULL, "order" integer, "date" TIMESTAMP NOT NULL, "isFree" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_3b9df6e0f006a24c680208e4e9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_likes" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "courseId" integer NOT NULL, "created" TIMESTAMP NOT NULL, CONSTRAINT "PK_27a0a53d61523df9affc5e02757" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_reviews" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "courseId" integer NOT NULL, "rating" integer NOT NULL, "comment" character varying(512), "created" TIMESTAMP NOT NULL, CONSTRAINT "PK_2dc117d5b688a2040125a09d1f1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "languageId" integer NOT NULL, "difficultyId" integer NOT NULL, "title" character varying(128) NOT NULL, "image" character varying(128) NOT NULL, "price" numeric(12,2) NOT NULL, "newPrice" numeric(12,2), "isPublished" boolean NOT NULL DEFAULT false, "reviewsCount" integer NOT NULL DEFAULT '0', "rating" numeric(2,1) NOT NULL, "sectionsCount" integer NOT NULL DEFAULT '0', "lessonsCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_sections" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "courseId" integer NOT NULL, "title" character varying(256) NOT NULL, "order" integer, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_03086ef0602f2721612a5ce610d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "difficulties" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, "icon" character varying(128) NOT NULL, CONSTRAINT "UQ_de991ed11f2258b97640f71a45a" UNIQUE ("title"), CONSTRAINT "PK_4c3dd46c9ed9b426d0307e45b3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Languages" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(32) NOT NULL, "code" character varying(6) NOT NULL, CONSTRAINT "UQ_d6ac67ed9ba62bb4f943203a9db" UNIQUE ("title"), CONSTRAINT "UQ_65b36dcfb45492b3f9c795f6984" UNIQUE ("code"), CONSTRAINT "PK_233ebfdefa0ca52e27832267429" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Matches_type_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TYPE "public"."Matches_winner_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "Matches" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "firstPlayer" integer NOT NULL, "firstPlayerResult" integer NOT NULL, "secondPlayer" integer NOT NULL, "secondPlayerResult" integer NOT NULL, "type" "public"."Matches_type_enum" NOT NULL, "moves" integer NOT NULL, "date" date NOT NULL, "winner" "public"."Matches_winner_enum" NOT NULL, CONSTRAINT "PK_ccbc29936f1b1c20729917b2c1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book-categories" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "UQ_83a5d5e359de38111a71f263f96" UNIQUE ("title"), CONSTRAINT "PK_632211fee3a01ddf68b7d92667a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "News" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(265) NOT NULL, "image" character varying(128) NOT NULL, "content" text NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_109fa61fff0eb3997a2890f52c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "NewsViews" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "newsId" integer NOT NULL, "firstDate" TIMESTAMP NOT NULL, "lastDate" TIMESTAMP NOT NULL, "count" integer NOT NULL DEFAULT '1', CONSTRAINT "PK_5fbfd17775e6d17175f1c1617e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "countryId" integer NOT NULL, "fulName" character varying(64) NOT NULL, "image" character varying(128) NOT NULL, "classic" integer, "rapid" integer, "blitz" integer, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."OtpCodes_type_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "OtpCodes" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "code" character varying(6) NOT NULL, "date" TIMESTAMP NOT NULL, "type" "public"."OtpCodes_type_enum" NOT NULL, CONSTRAINT "PK_5492c194bf4ce6d35b13d03dc58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchased_courses" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "courseId" integer NOT NULL, "isCompleted" boolean NOT NULL DEFAULT false, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_0e77cb42fa6a061e15bb988b8ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reportCategories" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, "order" integer NOT NULL, CONSTRAINT "UQ_ac74492c6fc090dbdb3d8051909" UNIQUE ("title"), CONSTRAINT "PK_0d1e145a1234417e2c77eba879b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."reports_target_enum" AS ENUM('book_review', 'course_review')`);
        await queryRunner.query(`CREATE TABLE "reports" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "categoryId" integer NOT NULL, "target" "public"."reports_target_enum" NOT NULL, "targetId" integer NOT NULL, "description" character varying(256), CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "souvenir_colors" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "souvenirId" integer NOT NULL, "colorId" integer NOT NULL, CONSTRAINT "PK_5c8029ad72955e45daff023102e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "souvenir_images" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "souvenirId" integer NOT NULL, "image" character varying(128) NOT NULL, CONSTRAINT "PK_b07771b43f0969c5dbf0dfbbdb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "souvenir_likes" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "souvenirId" integer NOT NULL, CONSTRAINT "PK_9ea34e318c7aa783c3390b3bec0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "souvenir_reviews" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "souvenirId" integer NOT NULL, "rating" integer NOT NULL, "comment" character varying(512), CONSTRAINT "PK_2e5e46ab70d10940ef2e1c96619" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "souvenirs_entities" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(128) NOT NULL, "description" text NOT NULL, "price" numeric(12,2) NOT NULL, CONSTRAINT "PK_4391a534d7362d701688cee1e79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "terms" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "content" text NOT NULL, CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('0', '1', '2', 'user', 'admin')`);
        await queryRunner.query(`CREATE TYPE "public"."users_logintype_enum" AS ENUM('0', '1', 'email', 'phone')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', "fullName" character varying(64) NOT NULL, "profileImage" character varying(128), "login" character varying(64) NOT NULL, "loginType" "public"."users_logintype_enum" NOT NULL, "password" character varying(128), "birthDate" date, "isVerified" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_lessons" ("id" SERIAL NOT NULL, "createD" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer NOT NULL, "courseLessonId" integer NOT NULL, "stoppedAt" integer, "isCompleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8d9e3c2cb96f8bd6a483c307983" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_lessons"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_logintype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "terms"`);
        await queryRunner.query(`DROP TABLE "souvenirs_entities"`);
        await queryRunner.query(`DROP TABLE "souvenir_reviews"`);
        await queryRunner.query(`DROP TABLE "souvenir_likes"`);
        await queryRunner.query(`DROP TABLE "souvenir_images"`);
        await queryRunner.query(`DROP TABLE "souvenir_colors"`);
        await queryRunner.query(`DROP TABLE "reports"`);
        await queryRunner.query(`DROP TYPE "public"."reports_target_enum"`);
        await queryRunner.query(`DROP TABLE "reportCategories"`);
        await queryRunner.query(`DROP TABLE "purchased_courses"`);
        await queryRunner.query(`DROP TABLE "OtpCodes"`);
        await queryRunner.query(`DROP TYPE "public"."OtpCodes_type_enum"`);
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "NewsViews"`);
        await queryRunner.query(`DROP TABLE "News"`);
        await queryRunner.query(`DROP TABLE "book-categories"`);
        await queryRunner.query(`DROP TABLE "Matches"`);
        await queryRunner.query(`DROP TYPE "public"."Matches_winner_enum"`);
        await queryRunner.query(`DROP TYPE "public"."Matches_type_enum"`);
        await queryRunner.query(`DROP TABLE "Languages"`);
        await queryRunner.query(`DROP TABLE "difficulties"`);
        await queryRunner.query(`DROP TABLE "course_sections"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "course_reviews"`);
        await queryRunner.query(`DROP TABLE "course_likes"`);
        await queryRunner.query(`DROP TABLE "course_lessons"`);
        await queryRunner.query(`DROP TABLE "coursesCategories"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "colors"`);
        await queryRunner.query(`DROP TABLE "cart_items"`);
        await queryRunner.query(`DROP TYPE "public"."cart_items_target_enum"`);
        await queryRunner.query(`DROP TABLE "book_reviews"`);
        await queryRunner.query(`DROP TABLE "book_likes"`);
        await queryRunner.query(`DROP TABLE "authors"`);
    }

}
