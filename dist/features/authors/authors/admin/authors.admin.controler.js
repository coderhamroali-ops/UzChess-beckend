"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthorsAdminControler", {
    enumerable: true,
    get: function() {
        return AuthorsAdminControler;
    }
});
const _createauthorshandler = require("./create-authors/create-authors.handler");
const _common = require("@nestjs/common");
const _createauthorsrequest = require("./create-authors/create-authors.request");
const _updateauthorsrequest = require("./update-authors/update-authors.request");
const _getallbookcategoriesrequest = require("../../../Languges/book-categories/public/get-all-book-category/get-all-book-categories.request");
const _updateauthorshandler = require("./update-authors/update-authors.handler");
const _deleteauthorshandler = require("./delete-authors/delete-authors.handler");
const _getallauthorshandler = require("./get-all-authors/get-all-authors.handler");
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
let AuthorsAdminControler = class AuthorsAdminControler {
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
        typeof _createauthorsrequest.CreateAuthorsRequest === "undefined" ? Object : _createauthorsrequest.CreateAuthorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthorsAdminControler.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallbookcategoriesrequest.GetAllBookCategoriesRequest === "undefined" ? Object : _getallbookcategoriesrequest.GetAllBookCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthorsAdminControler.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateauthorsrequest.UpdateAuthorsRequest === "undefined" ? Object : _updateauthorsrequest.UpdateAuthorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthorsAdminControler.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('dalete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthorsAdminControler.prototype, "delete", null);
AuthorsAdminControler = _ts_decorate([
    (0, _common.Controller)('admin/Authors'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createauthorshandler.CreateAuthorsHandler === "undefined" ? Object : _createauthorshandler.CreateAuthorsHandler,
        typeof _getallauthorshandler.GetAllAuthorsHandler === "undefined" ? Object : _getallauthorshandler.GetAllAuthorsHandler,
        typeof _updateauthorshandler.UpdateAuthorsHandler === "undefined" ? Object : _updateauthorshandler.UpdateAuthorsHandler,
        typeof _deleteauthorshandler.DeleteAuthorsHandler === "undefined" ? Object : _deleteauthorshandler.DeleteAuthorsHandler
    ])
], AuthorsAdminControler);

//# sourceMappingURL=authors.admin.controler.js.map