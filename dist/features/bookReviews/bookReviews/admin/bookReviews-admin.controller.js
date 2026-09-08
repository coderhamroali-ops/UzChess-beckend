"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookReviewsAdminController", {
    enumerable: true,
    get: function() {
        return BookReviewsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallbookReviewshandler = require("./get-all-bookReviews/get-all-bookReviews.handler");
const _createbookReviewshandler = require("./create-bookReviews/create-bookReviews.handler");
const _updatebookReviewshandler = require("./update-bookReviews/update-bookReviews.handler");
const _deletebookReviewshandler = require("./delete-bookReviews/delete-bookReviews.handler");
const _createbookReviewsrequest = require("./create-bookReviews/create-bookReviews.request");
const _getallbookReviewsrequest = require("./get-all-bookReviews/get-all-bookReviews.request");
const _updatebookReviewsrequest = require("./update-bookReviews/update-bookReviews.request");
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
let BookReviewsAdminController = class BookReviewsAdminController {
    async create(payload) {
        return await this.createReview.execute(payload);
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
    constructor(getAllHandler, createReview, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createReview = createReview;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbookReviewsrequest.CreateBookReviewsRequest === "undefined" ? Object : _createbookReviewsrequest.CreateBookReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookReviewsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookReviewsrequest.GetAllBookReviewsRequest === "undefined" ? Object : _getallbookReviewsrequest.GetAllBookReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookReviewsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatebookReviewsrequest.UpdateBookReviewsRequest === "undefined" ? Object : _updatebookReviewsrequest.UpdateBookReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookReviewsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], BookReviewsAdminController.prototype, "delete", null);
BookReviewsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/book-reviews'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookReviewshandler.GetAllBookReviewsHandler === "undefined" ? Object : _getallbookReviewshandler.GetAllBookReviewsHandler,
        typeof _createbookReviewshandler.CreateBookReviewsHandler === "undefined" ? Object : _createbookReviewshandler.CreateBookReviewsHandler,
        typeof _updatebookReviewshandler.UpdateBookReviewsHandler === "undefined" ? Object : _updatebookReviewshandler.UpdateBookReviewsHandler,
        typeof _deletebookReviewshandler.DeleteBookReviewsHandler === "undefined" ? Object : _deletebookReviewshandler.DeleteBookReviewsHandler
    ])
], BookReviewsAdminController);

//# sourceMappingURL=bookReviews-admin.controller.js.map