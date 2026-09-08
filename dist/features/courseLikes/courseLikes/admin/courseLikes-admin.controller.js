"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseLikesAdminController", {
    enumerable: true,
    get: function() {
        return CourseLikesAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseLikeshandler = require("./get-all-courseLikes/get-all-courseLikes.handler");
const _createcourseLikeshandler = require("./create-courseLikes/create-courseLikes.handler");
const _updatecourseLikeshandler = require("./update-courseLikes/update-courseLikes.handler");
const _deletecourseLikeshandler = require("./delete-courseLikes/delete-courseLikes.handler");
const _createcourseLikesrequest = require("./create-courseLikes/create-courseLikes.request");
const _getallcourseLikesrequest = require("./get-all-courseLikes/get-all-courseLikes.request");
const _updatecourseLikesrequest = require("./update-courseLikes/update-courseLikes.request");
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
let CourseLikesAdminController = class CourseLikesAdminController {
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
        typeof _createcourseLikesrequest.CreateCourseLikesRequest === "undefined" ? Object : _createcourseLikesrequest.CreateCourseLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLikesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseLikesrequest.GetAllCourseLikesRequest === "undefined" ? Object : _getallcourseLikesrequest.GetAllCourseLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLikesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecourseLikesrequest.UpdateCourseLikesRequest === "undefined" ? Object : _updatecourseLikesrequest.UpdateCourseLikesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLikesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLikesAdminController.prototype, "delete", null);
CourseLikesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/course-likes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseLikeshandler.GetAllCourseLikesHandler === "undefined" ? Object : _getallcourseLikeshandler.GetAllCourseLikesHandler,
        typeof _createcourseLikeshandler.CreateCourseLikesHandler === "undefined" ? Object : _createcourseLikeshandler.CreateCourseLikesHandler,
        typeof _updatecourseLikeshandler.UpdateCourseLikesHandler === "undefined" ? Object : _updatecourseLikeshandler.UpdateCourseLikesHandler,
        typeof _deletecourseLikeshandler.DeleteCourseLikesHandler === "undefined" ? Object : _deletecourseLikeshandler.DeleteCourseLikesHandler
    ])
], CourseLikesAdminController);

//# sourceMappingURL=courseLikes-admin.controller.js.map