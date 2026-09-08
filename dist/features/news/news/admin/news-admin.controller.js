"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsAdminController", {
    enumerable: true,
    get: function() {
        return NewsAdminController;
    }
});
const _createnewshandler = require("./create-news/create-news.handler");
const _common = require("@nestjs/common");
const _createnewsrequest = require("./create-news/create-news.request");
const _getallnewsrequest = require("./get-all-news/get-all-news.request");
const _getallnewshandler = require("./get-all-news/get-all-news.handler");
const _updatenewsrequest = require("./update-news/update-news.request");
const _updatenewshandler = require("./update-news/update-news.handler");
const _deletenewshandler = require("./delete-news/delete-news.handler");
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
let NewsAdminController = class NewsAdminController {
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
        typeof _createnewsrequest.CreateNewsRequest === "undefined" ? Object : _createnewsrequest.CreateNewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallnewsrequest.GetAllNewsRequest === "undefined" ? Object : _getallnewsrequest.GetAllNewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatenewsrequest.UpdateNewsRequest === "undefined" ? Object : _updatenewsrequest.UpdateNewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], NewsAdminController.prototype, "delete", null);
NewsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/news'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createnewshandler.CreateNewsHandler === "undefined" ? Object : _createnewshandler.CreateNewsHandler,
        typeof _getallnewshandler.GetAllNewsHandler === "undefined" ? Object : _getallnewshandler.GetAllNewsHandler,
        typeof _updatenewshandler.UpdateNewsHandler === "undefined" ? Object : _updatenewshandler.UpdateNewsHandler,
        typeof _deletenewshandler.DeleteNewsHandler === "undefined" ? Object : _deletenewshandler.DeleteNewsHandler
    ])
], NewsAdminController);

//# sourceMappingURL=news-admin.controller.js.map