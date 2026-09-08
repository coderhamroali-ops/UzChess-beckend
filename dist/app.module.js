"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _typeormconfigs = require("./core/configs/typeorm.configs");
const _typeorm = require("@nestjs/typeorm");
const _bookcategoriesmodule = require("./features/Languges/book-categories.module");
const _authorsmodule = require("./features/authors/authors.module");
const _booksmodule = require("./features/books/books.module");
const _colorsmodules = require("./features/colors/colors.modules");
const _countriesmodule = require("./features/countries/countries.module");
const _courseCategoriesmodule = require("./features/courseCategories/courseCategories.module");
const _coursesmodule = require("./features/courses/courses.module");
const _difficultiesmodule = require("./features/difficulties/difficulties.module");
const _languagesmodule = require("./features/languages/languages.module");
const _matchesmodule = require("./features/matches/matches.module");
const _newsmodule = require("./features/news/news.module");
const _NewsViewsmodule = require("./features/newsViews/NewsViews.module");
const _otpCodesmodule = require("./features/otpCodes/otpCodes.module");
const _playersmodule = require("./features/players/players.module");
const _reportCategoriesmodule = require("./features/reportCategories/reportCategories.module");
const _souvenirsmodule = require("./features/souvenirs/souvenirs.module");
const _usersmodule = require("./features/users/users.module");
const _souvenirLikesmodule = require("./features/souvenirLikes/souvenirLikes.module");
const _souvenirReviewsmodule = require("./features/souvenirReviews/souvenirReviews.module");
const _souvenirImagesmodule = require("./features/souvenirImages/souvenirImages.module");
const _courseSectionsmodule = require("./features/courseSections/courseSections.module");
const _purchasedCoursesmodule = require("./features/purchasedCourses/purchasedCourses.module");
const _courseLikesmodule = require("./features/courseLikes/courseLikes.module");
const _courseReviewsmodule = require("./features/courseReviews/courseReviews.module");
const _bookLikesmodule = require("./features/bookLikes/bookLikes.module");
const _bookReviewsmodule = require("./features/bookReviews/bookReviews.module");
const _cartItemsmodule = require("./features/cartItems/cartItems.module");
const _courseLessonsmodule = require("./features/courseLessons/courseLessons.module");
const _reportsmodule = require("./features/reports/reports.module");
const _users_lessonsmodule = require("./features/users_lessons/users_lessons.module");
const _termsmodule = require("./features/terms/terms.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forRoot(_typeormconfigs.typeormConfigs),
            AppModule,
            _bookcategoriesmodule.BookCategoriesModule,
            _authorsmodule.AuthorsModule,
            _booksmodule.BooksModule,
            _colorsmodules.ColorsModules,
            _countriesmodule.CountriesModule,
            _courseCategoriesmodule.CourseCategoriesModule,
            _coursesmodule.CoursesModule,
            _difficultiesmodule.DifficultiesModule,
            _languagesmodule.LanguagesModule,
            _matchesmodule.MatchesModule,
            _newsmodule.NewsModule,
            _NewsViewsmodule.NewsViewsModule,
            _otpCodesmodule.OtpCodesModule,
            _playersmodule.PlayersModule,
            _reportCategoriesmodule.ReportCategoriesModule,
            _souvenirsmodule.SouvenirsModule,
            _usersmodule.UsersModule,
            _souvenirLikesmodule.SouvenirLikesModule,
            _souvenirReviewsmodule.SouvenirReviewsModule,
            _souvenirImagesmodule.SouvenirImagesModule,
            _courseSectionsmodule.CourseSectionsModule,
            _purchasedCoursesmodule.PurchasedCoursesModule,
            _courseLikesmodule.CourseLikesModule,
            _courseReviewsmodule.CourseReviewsModule,
            _bookLikesmodule.BookLikesModule,
            _bookReviewsmodule.BookReviewsModule,
            _cartItemsmodule.CartItemsModule,
            _courseLessonsmodule.CourseLessonsModule,
            _reportsmodule.ReportsModule,
            _users_lessonsmodule.UsersLessonsModule,
            _termsmodule.TermsModule
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map