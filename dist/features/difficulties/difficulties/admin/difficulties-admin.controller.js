"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DifficultiesAdminController", {
    enumerable: true,
    get: function() {
        return DifficultiesAdminController;
    }
});
const _createdifficultieshandler = require("./create-difficulties/create-difficulties.handler");
const _common = require("@nestjs/common");
const _createdifficultiesrequest = require("./create-difficulties/create-difficulties.request");
const _getalldifficultiesrequest = require("./get-all-difficulties/get-all-difficulties-request");
const _getalldifficultieshandler = require("./get-all-difficulties/get-all-difficulties.handler");
const _updatedifficultiesrequest = require("./update-difficulties/update-difficulties.request");
const _updatedifficultieshandler = require("./update-difficulties/update-difficulties.handler");
const _deletedifficultieshandler = require("./delete-difficulties/delete-difficulties.handler");
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
let DifficultiesAdminController = class DifficultiesAdminController {
    async create(payload) {
        return await this.createAllHandler.execute(payload);
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
    constructor(createAllHandler, getAllHandler, updateHandler, deleteHandler){
        this.createAllHandler = createAllHandler;
        this.getAllHandler = getAllHandler;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createdifficultiesrequest.CreateDifficultiesRequest === "undefined" ? Object : _createdifficultiesrequest.CreateDifficultiesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], DifficultiesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getalldifficultiesrequest.GetAllDifficultiesRequest === "undefined" ? Object : _getalldifficultiesrequest.GetAllDifficultiesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], DifficultiesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatedifficultiesrequest.UpdateDifficultiesRequest === "undefined" ? Object : _updatedifficultiesrequest.UpdateDifficultiesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], DifficultiesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], DifficultiesAdminController.prototype, "delete", null);
DifficultiesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/difficulties'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createdifficultieshandler.CreateDifficultiesHandler === "undefined" ? Object : _createdifficultieshandler.CreateDifficultiesHandler,
        typeof _getalldifficultieshandler.GetAllDifficultiesHandler === "undefined" ? Object : _getalldifficultieshandler.GetAllDifficultiesHandler,
        typeof _updatedifficultieshandler.UpdateDifficultiesHandler === "undefined" ? Object : _updatedifficultieshandler.UpdateDifficultiesHandler,
        typeof _deletedifficultieshandler.DeleteDifficultiesHandler === "undefined" ? Object : _deletedifficultieshandler.DeleteDifficultiesHandler
    ])
], DifficultiesAdminController);

//# sourceMappingURL=difficulties-admin.controller.js.map