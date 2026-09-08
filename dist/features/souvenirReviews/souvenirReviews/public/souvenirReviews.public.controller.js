"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirReviewsPublicController", {
    enumerable: true,
    get: function() {
        return SouvenirReviewsPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirReviewshandler = require("./get-all-souvenirReviews/get-all-souvenirReviews.handler");
const _getallsouvenirReviewsrequest = require("./get-all-souvenirReviews/get-all-souvenirReviews.request");
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
let SouvenirReviewsPublicController = class SouvenirReviewsPublicController {
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
        typeof _getallsouvenirReviewsrequest.GetAllSouvenirReviewsRequest === "undefined" ? Object : _getallsouvenirReviewsrequest.GetAllSouvenirReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirReviewsPublicController.prototype, "getAll", null);
SouvenirReviewsPublicController = _ts_decorate([
    (0, _common.Controller)('public/souvenir-reviews'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirReviewshandler.GetAllSouvenirReviewsHandlerPub === "undefined" ? Object : _getallsouvenirReviewshandler.GetAllSouvenirReviewsHandlerPub
    ])
], SouvenirReviewsPublicController);

//# sourceMappingURL=souvenirReviews.public.controller.js.map