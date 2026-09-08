"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirImagesPublicController", {
    enumerable: true,
    get: function() {
        return SouvenirImagesPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirImageshandler = require("./get-all-souvenirImages/get-all-souvenirImages.handler");
const _getallsouvenirImagesrequest = require("./get-all-souvenirImages/get-all-souvenirImages.request");
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
let SouvenirImagesPublicController = class SouvenirImagesPublicController {
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
        typeof _getallsouvenirImagesrequest.GetAllSouvenirImagesRequest === "undefined" ? Object : _getallsouvenirImagesrequest.GetAllSouvenirImagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirImagesPublicController.prototype, "getAll", null);
SouvenirImagesPublicController = _ts_decorate([
    (0, _common.Controller)('public/souvenir-images'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirImageshandler.GetAllSouvenirImagesHandlerPub === "undefined" ? Object : _getallsouvenirImageshandler.GetAllSouvenirImagesHandlerPub
    ])
], SouvenirImagesPublicController);

//# sourceMappingURL=souvenirImages-public.controller.js.map