"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportCategoriesPublicController", {
    enumerable: true,
    get: function() {
        return ReportCategoriesPublicController;
    }
});
const _getallreportCategorieshandler = require("./get-all-reportCategories/get-all-reportCategories.handler");
const _common = require("@nestjs/common");
const _getallreportCategoriesrequest = require("./get-all-reportCategories/get-all-reportCategories.request");
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
let ReportCategoriesPublicController = class ReportCategoriesPublicController {
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
        typeof _getallreportCategoriesrequest.GetAllReportCategoriesRequest === "undefined" ? Object : _getallreportCategoriesrequest.GetAllReportCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportCategoriesPublicController.prototype, "getAll", null);
ReportCategoriesPublicController = _ts_decorate([
    (0, _common.Controller)('public/reportCategories'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallreportCategorieshandler.GetAllReportCategoriesHandlerPub === "undefined" ? Object : _getallreportCategorieshandler.GetAllReportCategoriesHandlerPub
    ])
], ReportCategoriesPublicController);

//# sourceMappingURL=reportCategories-public.controller.js.map