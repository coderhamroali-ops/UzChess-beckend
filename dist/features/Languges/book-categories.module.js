"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookCategoriesModule", {
    enumerable: true,
    get: function() {
        return BookCategoriesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _bookcategoriespubliccontroler = require("./book-categories/public/book-categories-public.controler");
const _createbookcategorieshandler = require("./book-categories/admin/create-book-category/create-book-categories.handler");
const _deletebookcategorieshandler = require("./book-categories/admin/delete-book-category/delete-book-categories.handler");
const _updatebookcategorieshandler = require("./book-categories/admin/update-book-category/update-book-categories.handler");
const _getallbookcategorieshandler = require("./book-categories/public/get-all-book-category/get-all-book-categories.handler");
const _getallbookcategorieshandler1 = require("./book-categories/admin/get-all-book-category/get-all-book-categories.handler");
const _bookcategoryentities = require("./entities/book-category.entities");
const _bookcategoriesadmincontroler = require("./book-categories/admin/book-categories.admin.controler");
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
let BookCategoriesModule = class BookCategoriesModule {
};
BookCategoriesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _bookcategoryentities.Entitybook
            ])
        ],
        controllers: [
            _bookcategoriesadmincontroler.BookCategoriesAdminControler,
            _bookcategoriespubliccontroler.BookCategoriesPublicControler
        ],
        providers: [
            _createbookcategorieshandler.CreateBookCategoriesHandler,
            _getallbookcategorieshandler1.GetAllBookCategoriesHandler,
            _deletebookcategorieshandler.DeleteBookCategoriesHandler,
            _updatebookcategorieshandler.UpdateBookCategoriesHandler,
            _getallbookcategorieshandler.GetAllBookCategoriesHandlerPup
        ]
    })
], BookCategoriesModule);

//# sourceMappingURL=book-categories.module.js.map