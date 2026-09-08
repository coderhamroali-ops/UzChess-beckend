"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersLessonsAdminController", {
    enumerable: true,
    get: function() {
        return UsersLessonsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallusers_lessonshandler = require("./get-all-users_lessons/get-all-users_lessons.handler");
const _createusers_lessonshandler = require("./create-users_lessons/create-users_lessons.handler");
const _updateusers_lessonshandler = require("./update-users_lessons/update-users_lessons.handler");
const _deleteusers_lessonshandler = require("./delete-users_lessons/delete-users_lessons.handler");
const _createusers_lessonsrequest = require("./create-users_lessons/create-users_lessons.request");
const _getallusers_lessonsrequest = require("./get-all-users_lessons/get-all-users_lessons.request");
const _updateusers_lessonsrequest = require("./update-users_lessons/update-users_lessons.request");
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
let UsersLessonsAdminController = class UsersLessonsAdminController {
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
        typeof _createusers_lessonsrequest.CreateUsersLessonsRequest === "undefined" ? Object : _createusers_lessonsrequest.CreateUsersLessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersLessonsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallusers_lessonsrequest.GetAllUsers_lessonsRequest === "undefined" ? Object : _getallusers_lessonsrequest.GetAllUsers_lessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersLessonsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateusers_lessonsrequest.UpdateUsersLessonsRequest === "undefined" ? Object : _updateusers_lessonsrequest.UpdateUsersLessonsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersLessonsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersLessonsAdminController.prototype, "delete", null);
UsersLessonsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/users-lessons'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallusers_lessonshandler.GetAllUsersLessonsHandler === "undefined" ? Object : _getallusers_lessonshandler.GetAllUsersLessonsHandler,
        typeof _createusers_lessonshandler.CreateUsersLessonsHandler === "undefined" ? Object : _createusers_lessonshandler.CreateUsersLessonsHandler,
        typeof _updateusers_lessonshandler.UpdateUsersLessonsHandler === "undefined" ? Object : _updateusers_lessonshandler.UpdateUsersLessonsHandler,
        typeof _deleteusers_lessonshandler.DeleteUsersLessonsHandler === "undefined" ? Object : _deleteusers_lessonshandler.DeleteUsersLessonsHandler
    ])
], UsersLessonsAdminController);

//# sourceMappingURL=users_lessons.admin.controller.js.map