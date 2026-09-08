"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColorsAdminController", {
    enumerable: true,
    get: function() {
        return ColorsAdminController;
    }
});
const _common = require("@nestjs/common");
const _createcolorshandler = require("./create-colers/create-colors.handler");
const _createcolorsrequest = require("./create-colers/create-colors.request");
const _getallcolorsrequest = require("./get-all-colors/get-all-colors.request");
const _getallcolorshandler = require("./get-all-colors/get-all-colors.handler");
const _updatecolorsrequest = require("./update-colors/update-colors.request");
const _updatecolorshandler = require("./update-colors/update-colors.handler");
const _deletecolorshandler = require("./delete-colors/delete-colors.handler");
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
let ColorsAdminController = class ColorsAdminController {
    async create(payload) {
        return await this.createHandler.execute(payload);
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
    constructor(createHandler, getAllHandler, updateHandler, deleteHandler){
        this.createHandler = createHandler;
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
        typeof _createcolorsrequest.CreateColorsRequest === "undefined" ? Object : _createcolorsrequest.CreateColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ColorsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcolorsrequest.GetAllColorsRequest === "undefined" ? Object : _getallcolorsrequest.GetAllColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ColorsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecolorsrequest.UpdateColorsRequest === "undefined" ? Object : _updatecolorsrequest.UpdateColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ColorsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], ColorsAdminController.prototype, "delete", null);
ColorsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/colors'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcolorshandler.CreateColorsHandler === "undefined" ? Object : _createcolorshandler.CreateColorsHandler,
        typeof _getallcolorshandler.GetAllColorsHandler === "undefined" ? Object : _getallcolorshandler.GetAllColorsHandler,
        typeof _updatecolorshandler.UpdateColorsHandler === "undefined" ? Object : _updatecolorshandler.UpdateColorsHandler,
        typeof _deletecolorshandler.DeleteColorsHandler === "undefined" ? Object : _deletecolorshandler.DeleteColorsHandler
    ])
], ColorsAdminController);

//# sourceMappingURL=colors-admin.controller.js.map