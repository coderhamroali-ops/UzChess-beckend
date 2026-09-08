"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportsAdminController", {
    enumerable: true,
    get: function() {
        return ReportsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallreportshandler = require("./get-all-reports/get-all-reports.handler");
const _createreportshandler = require("./create-reports/create-reports.handler");
const _updatereportshandler = require("./update-reports/update-reports.handler");
const _deletereportshandler = require("./delete-reports/delete-reports.handler");
const _createreportsrequest = require("./create-reports/create-reports.request");
const _getallreportsrequest = require("./get-all-reports/get-all-reports.request");
const _updatereportsrequest = require("./update-reports/update-reports.request");
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
let ReportsAdminController = class ReportsAdminController {
    async create(payload) {
        return await this.createReport.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllHandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updateHandler.execute(id, payload);
    }
    async delete(id) {
        return await this.deleteHandler.execute(id);
    }
    constructor(getAllHandler, createReport, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createReport = createReport;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createreportsrequest.CreateReportsRequest === "undefined" ? Object : _createreportsrequest.CreateReportsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallreportsrequest.GetAllReportsRequest === "undefined" ? Object : _getallreportsrequest.GetAllReportsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatereportsrequest.UpdateReportsRequest === "undefined" ? Object : _updatereportsrequest.UpdateReportsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], ReportsAdminController.prototype, "delete", null);
ReportsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/reports'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallreportshandler.GetAllReportsHandler === "undefined" ? Object : _getallreportshandler.GetAllReportsHandler,
        typeof _createreportshandler.CreateReportsHandler === "undefined" ? Object : _createreportshandler.CreateReportsHandler,
        typeof _updatereportshandler.UpdateReportsHandler === "undefined" ? Object : _updatereportshandler.UpdateReportsHandler,
        typeof _deletereportshandler.DeleteReportsHandler === "undefined" ? Object : _deletereportshandler.DeleteReportsHandler
    ])
], ReportsAdminController);

//# sourceMappingURL=reports-admin.controller.js.map