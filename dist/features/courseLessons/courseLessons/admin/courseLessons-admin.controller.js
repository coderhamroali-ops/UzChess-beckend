"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseLessonsAdminController", {
    enumerable: true,
    get: function() {
        return CourseLessonsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseLessonshandler = require("./get-all-courseLessons/get-all-courseLessons.handler");
const _createcourseLessonshandler = require("./create-courseLessons/create-courseLessons.handler");
const _updatecourseLessonshandler = require("./update-courseLessons/update-courseLessons.handler");
const _deletecourseLessonshandler = require("./delete-courseLessons/delete-courseLessons.handler");
const _createcourseLessonsrequest = require("./create-courseLessons/create-courseLessons.request");
const _getallcourseLessonsrequest = require("./get-all-courseLessons/get-all-courseLessons.request");
const _updatecourseLessonsrequest = require("./update-courseLessons/update-courseLessons.request");
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
let CourseLessonsAdminController = class CourseLessonsAdminController {
    async create(payload) {
        return await this.createLesson.execute(payload);
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
    constructor(getAllHandler, createLesson, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createLesson = createLesson;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcourseLessonsrequest.CreateCourseLessonsRequest === "undefined" ? Object : _createcourseLessonsrequest.CreateCourseLessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLessonsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseLessonsrequest.GetAllCourseLessonsRequest === "undefined" ? Object : _getallcourseLessonsrequest.GetAllCourseLessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLessonsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecourseLessonsrequest.UpdateCourseLessonsRequest === "undefined" ? Object : _updatecourseLessonsrequest.UpdateCourseLessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLessonsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseLessonsAdminController.prototype, "delete", null);
CourseLessonsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/course-lessons'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseLessonshandler.GetAllCourseLessonsHandler === "undefined" ? Object : _getallcourseLessonshandler.GetAllCourseLessonsHandler,
        typeof _createcourseLessonshandler.CreateCourseLessonsHandler === "undefined" ? Object : _createcourseLessonshandler.CreateCourseLessonsHandler,
        typeof _updatecourseLessonshandler.UpdateCourseLessonsHandler === "undefined" ? Object : _updatecourseLessonshandler.UpdateCourseLessonsHandler,
        typeof _deletecourseLessonshandler.DeleteCourseLessonsHandler === "undefined" ? Object : _deletecourseLessonshandler.DeleteCourseLessonsHandler
    ])
], CourseLessonsAdminController);

//# sourceMappingURL=courseLessons-admin.controller.js.map