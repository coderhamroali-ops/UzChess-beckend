"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookReviewsModule", {
    enumerable: true,
    get: function() {
        return BookReviewsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _bookReviewsentities = require("./entities/bookReviews.entities");
const _bookReviewsadmincontroller = require("./bookReviews/admin/bookReviews-admin.controller");
const _bookReviewspublicconntroller = require("./bookReviews/public/bookReviews-public.conntroller");
const _createbookReviewshandler = require("./bookReviews/admin/create-bookReviews/create-bookReviews.handler");
const _getallbookReviewshandler = require("./bookReviews/admin/get-all-bookReviews/get-all-bookReviews.handler");
const _getallbookReviewshandler1 = require("./bookReviews/public/get-all-bookReviews/get-all-bookReviews.handler");
const _updatebookReviewshandler = require("./bookReviews/admin/update-bookReviews/update-bookReviews.handler");
const _deletebookReviewshandler = require("./bookReviews/admin/delete-bookReviews/delete-bookReviews.handler");
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
let BookReviewsModule = class BookReviewsModule {
};
BookReviewsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _bookReviewsentities.BookReviewsEntity
            ])
        ],
        controllers: [
            _bookReviewsadmincontroller.BookReviewsAdminController,
            _bookReviewspublicconntroller.BookReviewsPublicController
        ],
        providers: [
            _createbookReviewshandler.CreateBookReviewsHandler,
            _getallbookReviewshandler.GetAllBookReviewsHandler,
            _getallbookReviewshandler1.GetAllBookReviewsHandlerPub,
            _updatebookReviewshandler.UpdateBookReviewsHandler,
            _deletebookReviewshandler.DeleteBookReviewsHandler
        ]
    })
], BookReviewsModule);

//# sourceMappingURL=bookReviews.module.js.map