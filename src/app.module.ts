import { Module } from '@nestjs/common';
import { typeormConfigs } from './core/configs/typeorm.configs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './features/auth/auth.module';
import { BookCategoriesModule } from './features/Languges/book-categories.module';
import { AuthorsModule } from './features/authors/authors.module';
import { BooksModule } from './features/books/books.module';
import { ColorsModules } from './features/colors/colors.modules';
import { CountriesModule } from './features/countries/countries.module';
import { CourseCategoriesModule } from './features/courseCategories/courseCategories.module';
import { CoursesModule } from './features/courses/courses.module';
import { DifficultiesModule } from './features/difficulties/difficulties.module';
import { LanguagesModule } from './features/languages/languages.module';
import { MatchesModule } from './features/matches/matches.module';
import { NewsModule } from './features/news/news.module';
import { NewsViewsModule } from './features/newsViews/NewsViews.module';
import { OtpCodesModule } from './features/otpCodes/otpCodes.module';
import { PlayersModule } from './features/players/players.module';
import { ReportCategoriesModule } from './features/reportCategories/reportCategories.module';
import { SouvenirsModule } from './features/souvenirs/souvenirs.module';
import { UsersModule } from './features/users/users.module';
import { SouvenirLikesModule } from './features/souvenirLikes/souvenirLikes.module';
import { SouvenirReviewsModule } from './features/souvenirReviews/souvenirReviews.module';
import { SouvenirImagesModule } from './features/souvenirImages/souvenirImages.module';
import { CourseSectionsModule } from './features/courseSections/courseSections.module';
import { PurchasedCoursesModule } from './features/purchasedCourses/purchasedCourses.module';
import { CourseLikesModule } from './features/courseLikes/courseLikes.module';
import { CourseReviewsModule } from './features/courseReviews/courseReviews.module';
import { BookLikesModule } from './features/bookLikes/bookLikes.module';
import { BookReviewsModule } from './features/bookReviews/bookReviews.module';
import { CartItemsModule } from './features/cartItems/cartItems.module';
import { CourseLessonsModule } from './features/courseLessons/courseLessons.module';
import { ReportsModule } from './features/reports/reports.module';
import { UsersLessonsModule } from './features/users_lessons/users_lessons.module';
import { TermsModule } from './features/terms/terms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),

    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),

    BookCategoriesModule,
    AuthorsModule,
    BooksModule,
    ColorsModules,
    CountriesModule,
    CourseCategoriesModule,
    CoursesModule,
    DifficultiesModule,
    LanguagesModule,
    MatchesModule,
    NewsModule,
    NewsViewsModule,
    OtpCodesModule,
    PlayersModule,
    ReportCategoriesModule,
    SouvenirsModule,
    UsersModule,
    SouvenirLikesModule,
    SouvenirReviewsModule,
    SouvenirImagesModule,
    CourseSectionsModule,
    PurchasedCoursesModule,
    CourseLikesModule,
    CourseReviewsModule,
    BookLikesModule,
    BookReviewsModule,
    CartItemsModule,
    CourseLessonsModule,
    ReportsModule,
    UsersLessonsModule,
    TermsModule,
    AuthModule,
  ],
})
export class AppModule {}