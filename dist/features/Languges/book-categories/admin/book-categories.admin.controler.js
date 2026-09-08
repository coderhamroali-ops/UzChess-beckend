"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BookCategoriesAdminControler", {
    enumerable: true,
    get: function() {
        return BookCategoriesAdminControler;
    }
});
const _common = require("@nestjs/common");
const _createbookcategorieshandler = require("./create-book-category/create-book-categories.handler");
const _createbookcategoriesrequest = require("./create-book-category/create-book-categories.request");
const _getallbookcategoriesrequest = require("../public/get-all-book-category/get-all-book-categories.request");
const _deletebookcategorieshandler = require("./delete-book-category/delete-book-categories.handler");
const _updatebookcategorieshandler = require("./update-book-category/update-book-categories.handler");
const _updatebookcategoriesrequest = require("./update-book-category/update-book-categories.request");
const _getallbookcategorieshandler = require("./get-all-book-category/get-all-book-categories.handler");
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
let BookCategoriesAdminControler = class BookCategoriesAdminControler {
    async create(payload) {
        return await this.createcategories.execute(payload);
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
    constructor(getAllHandler, createcategories, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createcategories = createcategories;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createbookcategoriesrequest.CreateBookCategoriesRequest === "undefined" ? Object : _createbookcategoriesrequest.CreateBookCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookCategoriesAdminControler.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookcategoriesrequest.GetAllBookCategoriesRequest === "undefined" ? Object : _getallbookcategoriesrequest.GetAllBookCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookCategoriesAdminControler.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatebookcategoriesrequest.UpdateBookCategoriesRequest === "undefined" ? Object : _updatebookcategoriesrequest.UpdateBookCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], BookCategoriesAdminControler.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], BookCategoriesAdminControler.prototype, "delete", null);
BookCategoriesAdminControler = _ts_decorate([
    (0, _common.Controller)('admin/book-categories'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookcategorieshandler.GetAllBookCategoriesHandler === "undefined" ? Object : _getallbookcategorieshandler.GetAllBookCategoriesHandler,
        typeof _createbookcategorieshandler.CreateBookCategoriesHandler === "undefined" ? Object : _createbookcategorieshandler.CreateBookCategoriesHandler,
        typeof _updatebookcategorieshandler.UpdateBookCategoriesHandler === "undefined" ? Object : _updatebookcategorieshandler.UpdateBookCategoriesHandler,
        typeof _deletebookcategorieshandler.DeleteBookCategoriesHandler === "undefined" ? Object : _deletebookcategorieshandler.DeleteBookCategoriesHandler
    ])
], BookCategoriesAdminControler);

//# sourceMappingURL=book-categories.admin.controler.js.map