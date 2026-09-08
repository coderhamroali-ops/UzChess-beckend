"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookLikesAdminController", {
    enumerable: true,
    get: function() {
        return BookLikesAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallbookLikeshandler = require("./get-all-bookLikes/get-all-bookLikes.handler");
const _createbookLikeshandler = require("./create-bookLikes/create-bookLikes.handler");
const _updatebookLikeshandler = require("./update-bookLikes/update-bookLikes.handler");
const _deletebookLikeshandler = require("./delete-bookLikes/delete-bookLikes.handler");
const _createbookLikesrequest = require("./create-bookLikes/create-bookLikes.request");
const _getallbookLikesrequest = require("./get-all-bookLikes/get-all-bookLikes.request");
const _updatebookLikesrequest = require("./update-bookLikes/update-bookLikes.request");
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
let BookLikesAdminController = class BookLikesAdminController {
    async create(payload) {
        return await this.createLike.execute(payload);
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
    constructor(getAllHandler, createLike, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createLike = createLike;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbookLikesrequest.CreateBookLikesRequest === "undefined" ? Object : _createbookLikesrequest.CreateBookLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookLikesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookLikesrequest.GetAllBookLikesRequest === "undefined" ? Object : _getallbookLikesrequest.GetAllBookLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookLikesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatebookLikesrequest.UpdateBookLikesRequest === "undefined" ? Object : _updatebookLikesrequest.UpdateBookLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookLikesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], BookLikesAdminController.prototype, "delete", null);
BookLikesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/book-likes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookLikeshandler.GetAllBookLikesHandler === "undefined" ? Object : _getallbookLikeshandler.GetAllBookLikesHandler,
        typeof _createbookLikeshandler.CreateBookLikesHandler === "undefined" ? Object : _createbookLikeshandler.CreateBookLikesHandler,
        typeof _updatebookLikeshandler.UpdateBookLikesHandler === "undefined" ? Object : _updatebookLikeshandler.UpdateBookLikesHandler,
        typeof _deletebookLikeshandler.DeleteBookLikesHandler === "undefined" ? Object : _deletebookLikeshandler.DeleteBookLikesHandler
    ])
], BookLikesAdminController);

//# sourceMappingURL=bookLikes-admin.controller.js.map