"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsViewsPublicController", {
    enumerable: true,
    get: function() {
        return NewsViewsPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallNewsViewshandler = require("./get-all-NewsViews/get-all-NewsViews.handler");
const _getallNewsViewsrequest = require("./get-all-NewsViews/get-all-NewsViews.request");
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
let NewsViewsPublicController = class NewsViewsPublicController {
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
        typeof _getallNewsViewsrequest.GetAllNewsViewsReques === "undefined" ? Object : _getallNewsViewsrequest.GetAllNewsViewsReques
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsViewsPublicController.prototype, "getAll", null);
NewsViewsPublicController = _ts_decorate([
    (0, _common.Controller)('public/news-views'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallNewsViewshandler.GetAllNewsViewsHandlerPub === "undefined" ? Object : _getallNewsViewshandler.GetAllNewsViewsHandlerPub
    ])
], NewsViewsPublicController);

//# sourceMappingURL=NewsViews.public.controller.js.map