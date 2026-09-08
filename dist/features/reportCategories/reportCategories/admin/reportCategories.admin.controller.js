"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportCategoriesAdminController", {
    enumerable: true,
    get: function() {
        return ReportCategoriesAdminController;
    }
});
const _common = require("@nestjs/common");
const _createreportCategorieshandler = require("./create-reportCategories/create-reportCategories.handler");
const _getallreportCategorieshandler = require("./get-all-reportCategories/get-all-reportCategories.handler");
const _updatereportCategorieshandler = require("./update-reportCategories/update-reportCategories.handler");
const _deletereportCategorieshandler = require("./delete-reportCategories/delete- reportCategories.handler");
const _createreportCategoriesrequest = require("./create-reportCategories/create-reportCategories.request");
const _paginationfilter = require("../../../common/pagination.filter");
const _updatereportCategoriesrequest = require("./update-reportCategories/update-reportCategories.request");
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
let ReportCategoriesAdminController = class ReportCategoriesAdminController {
    async create(payload) {
        return this.createReportCategoriesHandler.execute(payload);
    }
    async getAll(query) {
        return this.getAllReportCategoriesHandler.execute(query);
    }
    async update(id, payload) {
        return this.updateReportCategoriesHandler.execute(id, payload);
    }
    async delete(id) {
        return this.deleteReportCategoriesHandler.execute(id);
    }
    constructor(createReportCategoriesHandler, getAllReportCategoriesHandler, updateReportCategoriesHandler, deleteReportCategoriesHandler){
        this.createReportCategoriesHandler = createReportCategoriesHandler;
        this.getAllReportCategoriesHandler = getAllReportCategoriesHandler;
        this.updateReportCategoriesHandler = updateReportCategoriesHandler;
        this.deleteReportCategoriesHandler = deleteReportCategoriesHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createreportCategoriesrequest.CreateReportCategoriesRequest === "undefined" ? Object : _createreportCategoriesrequest.CreateReportCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportCategoriesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportCategoriesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatereportCategoriesrequest.UpdateReportCategoriesRequest === "undefined" ? Object : _updatereportCategoriesrequest.UpdateReportCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportCategoriesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportCategoriesAdminController.prototype, "delete", null);
ReportCategoriesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/report-categories'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createreportCategorieshandler.CreateReportCategoriesHandler === "undefined" ? Object : _createreportCategorieshandler.CreateReportCategoriesHandler,
        typeof _getallreportCategorieshandler.GetAllReportCategoriesHandler === "undefined" ? Object : _getallreportCategorieshandler.GetAllReportCategoriesHandler,
        typeof _updatereportCategorieshandler.UpdateReportCategoriesHandler === "undefined" ? Object : _updatereportCategorieshandler.UpdateReportCategoriesHandler,
        typeof _deletereportCategorieshandler.DeleteReportCategoriesHandler === "undefined" ? Object : _deletereportCategorieshandler.DeleteReportCategoriesHandler
    ])
], ReportCategoriesAdminController);

//# sourceMappingURL=reportCategories.admin.controller.js.map