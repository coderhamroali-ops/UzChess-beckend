"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TermsAdminController", {
    enumerable: true,
    get: function() {
        return TermsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getalltermshandler = require("./get-all-terms/get-all-terms.handler");
const _createtermshandler = require("./create-terms/create-terms.handler");
const _updatetermshandler = require("./update-terms/update-terms.handler");
const _deletetermshandler = require("./delete-terms/delete-terms.handler");
const _createtermsrequest = require("./create-terms/create-terms.request");
const _getalltermsrequest = require("./get-all-terms/get-all-terms.request");
const _updatetermsrequest = require("./update-terms/update-terms.request");
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
let TermsAdminController = class TermsAdminController {
    async create(payload) {
        return await this.createTerms.execute(payload);
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
    constructor(getAllHandler, createTerms, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createTerms = createTerms;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createtermsrequest.CreateTermsRequest === "undefined" ? Object : _createtermsrequest.CreateTermsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], TermsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getalltermsrequest.GetAllTermsRequest === "undefined" ? Object : _getalltermsrequest.GetAllTermsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], TermsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatetermsrequest.UpdateTermsRequest === "undefined" ? Object : _updatetermsrequest.UpdateTermsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], TermsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], TermsAdminController.prototype, "delete", null);
TermsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/terms'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getalltermshandler.GetAllTermsHandler === "undefined" ? Object : _getalltermshandler.GetAllTermsHandler,
        typeof _createtermshandler.CreateTermsHandler === "undefined" ? Object : _createtermshandler.CreateTermsHandler,
        typeof _updatetermshandler.UpdateTermsHandler === "undefined" ? Object : _updatetermshandler.UpdateTermsHandler,
        typeof _deletetermshandler.DeleteTermsHandler === "undefined" ? Object : _deletetermshandler.DeleteTermsHandler
    ])
], TermsAdminController);

//# sourceMappingURL=terms-admin.controller.js.map