"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookLikesModule", {
    enumerable: true,
    get: function() {
        return BookLikesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _bookLikesentities = require("./entities/bookLikes.entities");
const _bookLikesadmincontroller = require("./bookLikes/admin/bookLikes-admin.controller");
const _bookLikespubliccontroller = require("./bookLikes/public/bookLikes-public.controller");
const _createbookLikeshandler = require("./bookLikes/admin/create-bookLikes/create-bookLikes.handler");
const _getallbookLikeshandler = require("./bookLikes/admin/get-all-bookLikes/get-all-bookLikes.handler");
const _getallbookLikeshandler1 = require("./bookLikes/public/get-all-bookLikes/get-all-bookLikes.handler");
const _updatebookLikeshandler = require("./bookLikes/admin/update-bookLikes/update-bookLikes.handler");
const _deletebookLikeshandler = require("./bookLikes/admin/delete-bookLikes/delete-bookLikes.handler");
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
let BookLikesModule = class BookLikesModule {
};
BookLikesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _bookLikesentities.BookLikesEntity
            ])
        ],
        controllers: [
            _bookLikesadmincontroller.BookLikesAdminController,
            _bookLikespubliccontroller.BookLikesPublicController
        ],
        providers: [
            _createbookLikeshandler.CreateBookLikesHandler,
            _getallbookLikeshandler.GetAllBookLikesHandler,
            _getallbookLikeshandler1.GetAllBookLikesHandlerPub,
            _updatebookLikeshandler.UpdateBookLikesHandler,
            _deletebookLikeshandler.DeleteBookLikesHandler
        ]
    })
], BookLikesModule);

//# sourceMappingURL=bookLikes.module.js.map