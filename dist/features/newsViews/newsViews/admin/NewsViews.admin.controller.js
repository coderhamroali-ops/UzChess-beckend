"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsViewsAdminController", {
    enumerable: true,
    get: function() {
        return NewsViewsAdminController;
    }
});
const _common = require("@nestjs/common");
const _createnewsViewshandler = require("./creare-newsViews/create-newsViews.handler");
const _getallNewsViewshandler = require("./get-all-newsViews/get-all-NewsViews.handler");
const _updateNewsViewshandler = require("./update-newsViews/update-NewsViews.handler");
const _deleteNewsViewshandler = require("./delete-newsViews/delete-NewsViews.handler");
const _createnewsViewsrequest = require("./creare-newsViews/create-newsViews.request");
const _getallNewsViewsreques = require("./get-all-newsViews/get-all-NewsViews.reques");
const _updateNewsViewsrequest = require("./update-newsViews/update-NewsViews.request");
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
let NewsViewsAdminController = class NewsViewsAdminController {
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
        typeof _createnewsViewsrequest.CreateNewsViewsRequest === "undefined" ? Object : _createnewsViewsrequest.CreateNewsViewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsViewsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallNewsViewsreques.GetAllNewsViewsReques === "undefined" ? Object : _getallNewsViewsreques.GetAllNewsViewsReques
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsViewsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateNewsViewsrequest.UpdateNewsViewsRequest === "undefined" ? Object : _updateNewsViewsrequest.UpdateNewsViewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsViewsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsViewsAdminController.prototype, "delete", null);
NewsViewsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/news-views'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createnewsViewshandler.CreateNewsViewsHandler === "undefined" ? Object : _createnewsViewshandler.CreateNewsViewsHandler,
        typeof _getallNewsViewshandler.GetAllNewsViewsHandler === "undefined" ? Object : _getallNewsViewshandler.GetAllNewsViewsHandler,
        typeof _updateNewsViewshandler.UpdateNewsViewsHandler === "undefined" ? Object : _updateNewsViewshandler.UpdateNewsViewsHandler,
        typeof _deleteNewsViewshandler.DeleteNewsViewsHandler === "undefined" ? Object : _deleteNewsViewshandler.DeleteNewsViewsHandler
    ])
], NewsViewsAdminController);

//# sourceMappingURL=NewsViews.admin.controller.js.map