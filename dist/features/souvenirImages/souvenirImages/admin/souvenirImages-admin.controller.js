"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirImagesAdminController", {
    enumerable: true,
    get: function() {
        return SouvenirImagesAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirImageshandler = require("./get-all-souvenirImages/get-all-souvenirImages.handler");
const _createsouvenirImageshandler = require("./create-souvenirImages/create-souvenirImages.handler");
const _updatesouvenirImageshandler = require("./update-souvenirImages/update-souvenirImages.handler");
const _deletesouvenirImageshandler = require("./delete-souvenirImages/delete-souvenirImages.handler");
const _createsouvenirImagesrequest = require("./create-souvenirImages/create-souvenirImages.request");
const _getallsouvenirImagesrequest = require("./get-all-souvenirImages/get-all-souvenirImages.request");
const _updatesouvenirImagesrequest = require("./update-souvenirImages/update-souvenirImages.request");
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
let SouvenirImagesAdminController = class SouvenirImagesAdminController {
    async create(payload) {
        return await this.createImages.execute(payload);
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
    constructor(getAllHandler, createImages, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createImages = createImages;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirImagesrequest.CreateSouvenirImagesRequest === "undefined" ? Object : _createsouvenirImagesrequest.CreateSouvenirImagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirImagesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirImagesrequest.GetAllSouvenirImagesRequest === "undefined" ? Object : _getallsouvenirImagesrequest.GetAllSouvenirImagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirImagesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatesouvenirImagesrequest.UpdateSouvenirImagesRequest === "undefined" ? Object : _updatesouvenirImagesrequest.UpdateSouvenirImagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirImagesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirImagesAdminController.prototype, "delete", null);
SouvenirImagesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/souvenir-images'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirImageshandler.GetAllSouvenirImagesHandler === "undefined" ? Object : _getallsouvenirImageshandler.GetAllSouvenirImagesHandler,
        typeof _createsouvenirImageshandler.CreateSouvenirImagesHandler === "undefined" ? Object : _createsouvenirImageshandler.CreateSouvenirImagesHandler,
        typeof _updatesouvenirImageshandler.UpdateSouvenirImagesHandler === "undefined" ? Object : _updatesouvenirImageshandler.UpdateSouvenirImagesHandler,
        typeof _deletesouvenirImageshandler.DeleteSouvenirImagesHandler === "undefined" ? Object : _deletesouvenirImageshandler.DeleteSouvenirImagesHandler
    ])
], SouvenirImagesAdminController);

//# sourceMappingURL=souvenirImages-admin.controller.js.map