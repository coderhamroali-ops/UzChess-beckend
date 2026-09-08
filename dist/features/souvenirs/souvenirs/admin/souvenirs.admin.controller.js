"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirsController", {
    enumerable: true,
    get: function() {
        return SouvenirsController;
    }
});
const _common = require("@nestjs/common");
const _createsouvenirshandler = require("./create-souvenirs/create-souvenirs.handler");
const _getallsouvenirshandler = require("./get-all-souvenirs/get-all-souvenirs.handler");
const _updatesouvenirshandler = require("./update-souvenirs/update-souvenirs.handler");
const _deletesouvenirshandler = require("./delete-souvenirs/delete-souvenirs.handler");
const _createsouvenirsrequest = require("./create-souvenirs/create-souvenirs.request");
const _updatesouvenirsrequest = require("./update-souvenirs/update-souvenirs.request");
const _getallsouvenirsrequest = require("./get-all-souvenirs/get-all-souvenirs.request");
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
let SouvenirsController = class SouvenirsController {
    async create(payload) {
        return await this.createSouvenirsHandler.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllSouvenirsHandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updateSouvenirsHandler.execute(id, payload);
    }
    async delete(id) {
        return await this.deleteSouvenirsHandler.execute(id);
    }
    constructor(createSouvenirsHandler, getAllSouvenirsHandler, updateSouvenirsHandler, deleteSouvenirsHandler){
        this.createSouvenirsHandler = createSouvenirsHandler;
        this.getAllSouvenirsHandler = getAllSouvenirsHandler;
        this.updateSouvenirsHandler = updateSouvenirsHandler;
        this.deleteSouvenirsHandler = deleteSouvenirsHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirsrequest.CreateSouvenirsRequest === "undefined" ? Object : _createsouvenirsrequest.CreateSouvenirsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirsController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirsrequest.GetAllSouvenirsRequest === "undefined" ? Object : _getallsouvenirsrequest.GetAllSouvenirsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirsController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatesouvenirsrequest.UpdateSouvenirsRequest === "undefined" ? Object : _updatesouvenirsrequest.UpdateSouvenirsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirsController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirsController.prototype, "delete", null);
SouvenirsController = _ts_decorate([
    (0, _common.Controller)('souvenirs'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirshandler.CreateSouvenirsHandler === "undefined" ? Object : _createsouvenirshandler.CreateSouvenirsHandler,
        typeof _getallsouvenirshandler.GetAllSouvenirsHandler === "undefined" ? Object : _getallsouvenirshandler.GetAllSouvenirsHandler,
        typeof _updatesouvenirshandler.UpdateSouvenirsHandler === "undefined" ? Object : _updatesouvenirshandler.UpdateSouvenirsHandler,
        typeof _deletesouvenirshandler.DeleteSouvenirsHandler === "undefined" ? Object : _deletesouvenirshandler.DeleteSouvenirsHandler
    ])
], SouvenirsController);

//# sourceMappingURL=souvenirs.admin.controller.js.map