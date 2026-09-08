"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseCategoriesAdminController", {
    enumerable: true,
    get: function() {
        return CourseCategoriesAdminController;
    }
});
const _common = require("@nestjs/common");
const _createcourseCategoriesrequest = require("./admin/create-courseCategories/create-courseCategories.request");
const _createcourseCategorieshandler = require("./admin/create-courseCategories/create-courseCategories.handler");
const _getallcourseCategoriesrequest = require("./admin/get-all-courseCategories/get-all-courseCategories.request");
const _getallcourseCategorieshandler = require("./admin/get-all-courseCategories/get-all-courseCategories.handler");
const _updatecourseCategoriesrequest = require("./admin/update-courseCategories/update-courseCategories.request");
const _updatecourseCategorieshandler = require("./admin/update-courseCategories/update-courseCategories.handler");
const _deletecourseCategorieshandler = require("./admin/delete-courseCategories/delete-courseCategories.handler");
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
let CourseCategoriesAdminController = class CourseCategoriesAdminController {
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
        typeof _createcourseCategoriesrequest.CreateCourseCategoriesRequest === "undefined" ? Object : _createcourseCategoriesrequest.CreateCourseCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseCategoriesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseCategoriesrequest.GetAllCourseCategoriesRequest === "undefined" ? Object : _getallcourseCategoriesrequest.GetAllCourseCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseCategoriesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecourseCategoriesrequest.UpdateCourseCategoriesRequest === "undefined" ? Object : _updatecourseCategoriesrequest.UpdateCourseCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseCategoriesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseCategoriesAdminController.prototype, "delete", null);
CourseCategoriesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/courseCategories'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcourseCategorieshandler.CreateCourseCategoriesHandler === "undefined" ? Object : _createcourseCategorieshandler.CreateCourseCategoriesHandler,
        typeof _getallcourseCategorieshandler.GetAllCourseCategoriesHandler === "undefined" ? Object : _getallcourseCategorieshandler.GetAllCourseCategoriesHandler,
        typeof _updatecourseCategorieshandler.UpdateCourseCategoriesHandler === "undefined" ? Object : _updatecourseCategorieshandler.UpdateCourseCategoriesHandler,
        typeof _deletecourseCategorieshandler.DeleteCourseCategoriesHandler === "undefined" ? Object : _deletecourseCategorieshandler.DeleteCourseCategoriesHandler
    ])
], CourseCategoriesAdminController);

//# sourceMappingURL=courseCategories.admin.controller.js.map