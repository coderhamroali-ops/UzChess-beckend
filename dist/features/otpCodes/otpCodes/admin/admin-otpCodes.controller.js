"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OtpCodesAdminController", {
    enumerable: true,
    get: function() {
        return OtpCodesAdminController;
    }
});
const _common = require("@nestjs/common");
const _createotpCodeshandler = require("./create-otpCodes/create-otpCodes.handler");
const _getallOtpCodeshandler = require("./get-all-otpCodes/get-all-OtpCodes.handler");
const _updateOtpCodeshandler = require("./update-otpCodes/update-OtpCodes.handler");
const _deleteotCodeshandler = require("./delete-otpCodes/delete-otCodes.handler");
const _createotpCodesrequest = require("./create-otpCodes/create-otpCodes.request");
const _getallOtpCodesrequest = require("./get-all-otpCodes/get-all-OtpCodes.request");
const _updateOtpCodesrequest = require("./update-otpCodes/update-OtpCodes.request");
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
let OtpCodesAdminController = class OtpCodesAdminController {
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
        typeof _createotpCodesrequest.CreateOtpCodesRequest === "undefined" ? Object : _createotpCodesrequest.CreateOtpCodesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], OtpCodesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallOtpCodesrequest.GetAllOtpCodesRequest === "undefined" ? Object : _getallOtpCodesrequest.GetAllOtpCodesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], OtpCodesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateOtpCodesrequest.UpdateOtpCodesRequest === "undefined" ? Object : _updateOtpCodesrequest.UpdateOtpCodesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], OtpCodesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], OtpCodesAdminController.prototype, "delete", null);
OtpCodesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/otp-codes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createotpCodeshandler.CreateOtpCodesHandler === "undefined" ? Object : _createotpCodeshandler.CreateOtpCodesHandler,
        typeof _getallOtpCodeshandler.GetAllOtpCodesHandler === "undefined" ? Object : _getallOtpCodeshandler.GetAllOtpCodesHandler,
        typeof _updateOtpCodeshandler.UpdateOtpCodesHandler === "undefined" ? Object : _updateOtpCodeshandler.UpdateOtpCodesHandler,
        typeof _deleteotCodeshandler.DeleteOtpCodesHandler === "undefined" ? Object : _deleteotCodeshandler.DeleteOtpCodesHandler
    ])
], OtpCodesAdminController);

//# sourceMappingURL=admin-otpCodes.controller.js.map