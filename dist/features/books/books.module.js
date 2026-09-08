"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BooksModule", {
    enumerable: true,
    get: function() {
        return BooksModule;
    }
});
const _common = require("@nestjs/common");
const _createbookshandler = require("./books/admin/create-book/create-books.handler");
const _getallbookshandler = require("./books/admin/get-all-books/get-all-books.handler");
const _deletebookshandler = require("./books/admin/delete-books/delete-books.handler");
const _updatebookshandler = require("./books/admin/update-books/update-books.handler");
const _booksentities = require("./entities/books.entities");
const _typeorm = require("@nestjs/typeorm");
const _getallbookshandler1 = require("./books/public/get-all-books/get-all-books.handler");
const _bookspubliccontroller = require("./books/public/books-public.controller");
const _booksadmincontroler = require("./books/admin/books-admin.controler");
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
let BooksModule = class BooksModule {
};
BooksModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _booksentities.BooksEntity
            ])
        ],
        controllers: [
            _booksadmincontroler.BooksAdminControler,
            _bookspubliccontroller.BooksPublicController
        ],
        providers: [
            _createbookshandler.CreateBooksHandler,
            _getallbookshandler.GetAllBooksHandler,
            _deletebookshandler.DeleteBooksHandler,
            _updatebookshandler.UpdateBooksHandler,
            _getallbookshandler1.GetAllBooksHandlerP
        ]
    })
], BooksModule);

//# sourceMappingURL=books.module.js.map