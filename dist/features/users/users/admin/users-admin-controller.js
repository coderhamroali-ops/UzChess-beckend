"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersAdminController", {
    enumerable: true,
    get: function() {
        return UsersAdminController;
    }
});
const _common = require("@nestjs/common");
const _updateusersrequest = require("./update-users/update-users.request");
const _deleteusershandler = require("./delete-users/delete-users.handler");
const _createusershandler = require("./create-users/create-users.handler");
const _getallusershandler = require("./get-all-user/get-all-users.handler");
const _updateusershandler = require("./update-users/update-users-handler");
const _createuserrequest = require("./create-users/create-user.request");
const _getallusersrequest = require("./get-all-user/get-all-users.request");
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
let UsersAdminController = class UsersAdminController {
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
        typeof _createuserrequest.CreateUsersRequest === "undefined" ? Object : _createuserrequest.CreateUsersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallusersrequest.GetAllUsersRequest === "undefined" ? Object : _getallusersrequest.GetAllUsersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateusersrequest.UpdateUsersRequest === "undefined" ? Object : _updateusersrequest.UpdateUsersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersAdminController.prototype, "delete", null);
UsersAdminController = _ts_decorate([
    (0, _common.Controller)('admin/users'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createusershandler.CreateUsersHandler === "undefined" ? Object : _createusershandler.CreateUsersHandler,
        typeof _getallusershandler.GetAllUsersHandler === "undefined" ? Object : _getallusershandler.GetAllUsersHandler,
        typeof _updateusershandler.UpdateUsersHandler === "undefined" ? Object : _updateusershandler.UpdateUsersHandler,
        typeof _deleteusershandler.DeleteUsersHandler === "undefined" ? Object : _deleteusershandler.DeleteUsersHandler
    ])
], UsersAdminController);

//# sourceMappingURL=users-admin-controller.js.map