"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirLikesAdminController", {
    enumerable: true,
    get: function() {
        return SouvenirLikesAdminController;
    }
});
const _common = require("@nestjs/common");
const _createsouvenirLikeshandler = require("./create-souvenirLikes/create-souvenirLikes.handler");
const _createsouvenirLikesrequest = require("./create-souvenirLikes/create-souvenirLikes.request");
const _getallsouvenirLikeshandler = require("./get-all-souvenirLikes/get-all-souvenirLikes.handler");
const _getallsouvenirLikesrequest = require("./get-all-souvenirLikes/get-all-souvenirLikes.request");
const _updatesouvenirLikeshandler = require("./update-souvenirLikes/update-souvenirLikes.handler");
const _updatesouvenirLikesrequest = require("./update-souvenirLikes/update-souvenirLikes.request");
const _deletesouvenirLikeshandler = require("./delete-souvenirLikes/delete-souvenirLikes.handler");
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
let SouvenirLikesAdminController = class SouvenirLikesAdminController {
    async create(payload) {
        return await this.createSouvenirLikes.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllhandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updateSouvenirLikes.execute(id, payload);
    }
    async delete(id) {
        return await this.deletehandler.execute(id);
    }
    constructor(createSouvenirLikes, getAllhandler, updateSouvenirLikes, deletehandler){
        this.createSouvenirLikes = createSouvenirLikes;
        this.getAllhandler = getAllhandler;
        this.updateSouvenirLikes = updateSouvenirLikes;
        this.deletehandler = deletehandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirLikesrequest.CreateSouvenirLikesRequest === "undefined" ? Object : _createsouvenirLikesrequest.CreateSouvenirLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirLikesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirLikesrequest.GetAllSouvenirLikesRequest === "undefined" ? Object : _getallsouvenirLikesrequest.GetAllSouvenirLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirLikesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatesouvenirLikesrequest.UpdateSouvenirLikesRequest === "undefined" ? Object : _updatesouvenirLikesrequest.UpdateSouvenirLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirLikesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirLikesAdminController.prototype, "delete", null);
SouvenirLikesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/SouvenirLikes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirLikeshandler.CreateSouvenirLikesHandler === "undefined" ? Object : _createsouvenirLikeshandler.CreateSouvenirLikesHandler,
        typeof _getallsouvenirLikeshandler.GetAllSouvenirLikesHandler === "undefined" ? Object : _getallsouvenirLikeshandler.GetAllSouvenirLikesHandler,
        typeof _updatesouvenirLikeshandler.UpdateSouvenirLikesHandler === "undefined" ? Object : _updatesouvenirLikeshandler.UpdateSouvenirLikesHandler,
        typeof _deletesouvenirLikeshandler.DeleteSouvenirLikesHandler === "undefined" ? Object : _deletesouvenirLikeshandler.DeleteSouvenirLikesHandler
    ])
], SouvenirLikesAdminController);

//# sourceMappingURL=souvenirLikes-admin-controller.js.map