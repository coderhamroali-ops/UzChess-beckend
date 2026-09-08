"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseSectionsAdminController", {
    enumerable: true,
    get: function() {
        return CourseSectionsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseSectionshandler = require("./get-all-courseSections/get-all-courseSections.handler");
const _createcourseSectionshandler = require("./create-courseSections/create-courseSections.handler");
const _updatecourseSectionshandler = require("./update-courseSections/update-courseSections.handler");
const _deletecourseSectionshandler = require("./delete-courseSections/delete-courseSections.handler");
const _createcourseSectionsrequest = require("./create-courseSections/create-courseSections.request");
const _getallcourseSectionsrequest = require("./get-all-courseSections/get-all-courseSections.request");
const _updatecourseSectionsrequest = require("./update-courseSections/update-courseSections.request");
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
let CourseSectionsAdminController = class CourseSectionsAdminController {
    async create(payload) {
        return await this.createSections.execute(payload);
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
    constructor(getAllHandler, createSections, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createSections = createSections;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcourseSectionsrequest.CreateCourseSectionsRequest === "undefined" ? Object : _createcourseSectionsrequest.CreateCourseSectionsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseSectionsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseSectionsrequest.GetAllCourseSectionsRequest === "undefined" ? Object : _getallcourseSectionsrequest.GetAllCourseSectionsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseSectionsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecourseSectionsrequest.UpdateCourseSectionsRequest === "undefined" ? Object : _updatecourseSectionsrequest.UpdateCourseSectionsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseSectionsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseSectionsAdminController.prototype, "delete", null);
CourseSectionsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/course-sections'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseSectionshandler.GetAllCourseSectionsHandler === "undefined" ? Object : _getallcourseSectionshandler.GetAllCourseSectionsHandler,
        typeof _createcourseSectionshandler.CreateCourseSectionsHandler === "undefined" ? Object : _createcourseSectionshandler.CreateCourseSectionsHandler,
        typeof _updatecourseSectionshandler.UpdateCourseSectionsHandler === "undefined" ? Object : _updatecourseSectionshandler.UpdateCourseSectionsHandler,
        typeof _deletecourseSectionshandler.DeleteCourseSectionsHandler === "undefined" ? Object : _deletecourseSectionshandler.DeleteCourseSectionsHandler
    ])
], CourseSectionsAdminController);

//# sourceMappingURL=courseSections-admin.controller.js.map