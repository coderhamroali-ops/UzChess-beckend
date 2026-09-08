"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirColorsAdminController", {
    enumerable: true,
    get: function() {
        return SouvenirColorsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirColorshandlet = require("./get-all-souvenirColors/get-all-souvenirColors.handlet");
const _createsouvenirColorshandler = require("./create-souvenirColors/create-souvenirColors.handler");
const _updatesouvenirColorshandler = require("./update-souvenirColors/update-souvenirColors.handler");
const _deletesouvenirColorshandler = require("./delete-souvenirColors/delete-souvenirColors.handler");
const _createsouvenirColorsrequest = require("./create-souvenirColors/create-souvenirColors.request");
const _getallsouvenirColorsrequest = require("./get-all-souvenirColors/get-all-souvenirColors.request");
const _updatesouvenirColorsrequest = require("./update-souvenirColors/update-souvenirColors.request");
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
let SouvenirColorsAdminController = class SouvenirColorsAdminController {
    async create(payload) {
        return await this.createColors.execute(payload);
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
    constructor(getAllHandler, createColors, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createColors = createColors;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirColorsrequest.CreateSouvenirColorsRequest === "undefined" ? Object : _createsouvenirColorsrequest.CreateSouvenirColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirColorsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirColorsrequest.GetAllSouvenirColorsRequest === "undefined" ? Object : _getallsouvenirColorsrequest.GetAllSouvenirColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirColorsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatesouvenirColorsrequest.UpdateSouvenirColorsRequest === "undefined" ? Object : _updatesouvenirColorsrequest.UpdateSouvenirColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirColorsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirColorsAdminController.prototype, "delete", null);
SouvenirColorsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/souvenir-colors'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirColorshandlet.GetAllSouvenirColorsHandler === "undefined" ? Object : _getallsouvenirColorshandlet.GetAllSouvenirColorsHandler,
        typeof _createsouvenirColorshandler.CreateSouvenirColorsHandler === "undefined" ? Object : _createsouvenirColorshandler.CreateSouvenirColorsHandler,
        typeof _updatesouvenirColorshandler.UpdateSouvenirColorsHandler === "undefined" ? Object : _updatesouvenirColorshandler.UpdateSouvenirColorsHandler,
        typeof _deletesouvenirColorshandler.DeleteSouvenirColorsHandler === "undefined" ? Object : _deletesouvenirColorshandler.DeleteSouvenirColorsHandler
    ])
], SouvenirColorsAdminController);

//# sourceMappingURL=souvenirColors.admin.controller.js.map