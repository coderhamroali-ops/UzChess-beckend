"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirReviewsAdminController", {
    enumerable: true,
    get: function() {
        return SouvenirReviewsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirReviewshandler = require("./get-all-souvenirReviews/get-all-souvenirReviews.handler");
const _createsouvenirReviewshandler = require("./create-souvenirReviews/create-souvenirReviews.handler");
const _updatesouvenirReviewshandler = require("./update-souvenirReviews/update-souvenirReviews.handler");
const _deletesouvenirReviewshandler = require("./delete-souvenirReviews/delete-souvenirReviews.handler");
const _createsouvenirReviewsrequest = require("./create-souvenirReviews/create-souvenirReviews.request");
const _getallsouvenirReviewsrequest = require("./get-all-souvenirReviews/get-all-souvenirReviews.request");
const _updatesouvenirReviewsrequest = require("./update-souvenirReviews/update-souvenirReviews.request");
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
let SouvenirReviewsAdminController = class SouvenirReviewsAdminController {
    async create(payload) {
        return await this.createReviews.execute(payload);
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
    constructor(getAllHandler, createReviews, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createReviews = createReviews;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createsouvenirReviewsrequest.CreateSouvenirReviewsRequest === "undefined" ? Object : _createsouvenirReviewsrequest.CreateSouvenirReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirReviewsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirReviewsrequest.GetAllSouvenirReviewsRequest === "undefined" ? Object : _getallsouvenirReviewsrequest.GetAllSouvenirReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirReviewsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatesouvenirReviewsrequest.UpdateSouvenirReviewsRequest === "undefined" ? Object : _updatesouvenirReviewsrequest.UpdateSouvenirReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirReviewsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirReviewsAdminController.prototype, "delete", null);
SouvenirReviewsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/souvenir-reviews'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirReviewshandler.GetAllSouvenirReviewsHandler === "undefined" ? Object : _getallsouvenirReviewshandler.GetAllSouvenirReviewsHandler,
        typeof _createsouvenirReviewshandler.CreateSouvenirReviewsHandler === "undefined" ? Object : _createsouvenirReviewshandler.CreateSouvenirReviewsHandler,
        typeof _updatesouvenirReviewshandler.UpdateSouvenirReviewsHandler === "undefined" ? Object : _updatesouvenirReviewshandler.UpdateSouvenirReviewsHandler,
        typeof _deletesouvenirReviewshandler.DeleteSouvenirReviewsHandler === "undefined" ? Object : _deletesouvenirReviewshandler.DeleteSouvenirReviewsHandler
    ])
], SouvenirReviewsAdminController);

//# sourceMappingURL=souvenirReviews-admin.controller.js.map