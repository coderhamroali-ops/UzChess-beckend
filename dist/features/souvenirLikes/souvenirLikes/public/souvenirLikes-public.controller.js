"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirLikesPublicController", {
    enumerable: true,
    get: function() {
        return SouvenirLikesPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirLikeshandler = require("./get-all-souvenirLikes/get-all-souvenirLikes.handler");
const _getallsouvenirLikesrequest = require("./get-all-souvenirLikes/get-all-souvenirLikes.request");
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
let SouvenirLikesPublicController = class SouvenirLikesPublicController {
    async getAll(filter) {
        return await this.getAllhandler.execute(filter);
    }
    constructor(getAllhandler){
        this.getAllhandler = getAllhandler;
    }
};
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirLikesrequest.GetAllSouvenirLikesRequest === "undefined" ? Object : _getallsouvenirLikesrequest.GetAllSouvenirLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirLikesPublicController.prototype, "getAll", null);
SouvenirLikesPublicController = _ts_decorate([
    (0, _common.Controller)('public/SouvenirLikes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirLikeshandler.GetAllSouvenirLikesHandlerPub === "undefined" ? Object : _getallsouvenirLikeshandler.GetAllSouvenirLikesHandlerPub
    ])
], SouvenirLikesPublicController);

//# sourceMappingURL=souvenirLikes-public.controller.js.map