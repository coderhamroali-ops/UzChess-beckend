"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookLikesPublicController", {
    enumerable: true,
    get: function() {
        return BookLikesPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallbookLikeshandler = require("./get-all-bookLikes/get-all-bookLikes.handler");
const _getallbookLikesrequest = require("./get-all-bookLikes/get-all-bookLikes.request");
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
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let BookLikesPublicController = class BookLikesPublicController {
    async getAll(filter) {
        return await this.getAllHandler.execute(filter);
    }
    constructor(getAllHandler){
        this.getAllHandler = getAllHandler;
    }
};
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookLikesrequest.GetAllBookLikesRequest === "undefined" ? Object : _getallbookLikesrequest.GetAllBookLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookLikesPublicController.prototype, "getAll", null);
BookLikesPublicController = _ts_decorate([
    (0, _common.Controller)('public/book-likes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookLikeshandler.GetAllBookLikesHandlerPub === "undefined" ? Object : _getallbookLikeshandler.GetAllBookLikesHandlerPub
    ])
], BookLikesPublicController);

//# sourceMappingURL=bookLikes-public.controller.js.map