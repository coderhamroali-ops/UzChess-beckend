"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PlayersAdminController", {
    enumerable: true,
    get: function() {
        return PlayersAdminController;
    }
});
const _createplayershandler = require("./create-players/create-players.handler");
const _getallplayershandler = require("./get-all-players/get-all-players.handler");
const _updateplayershandler = require("./update-players/update-players.handler");
const _common = require("@nestjs/common");
const _createplayersrequest = require("./create-players/create-players.request");
const _getallplayersrequest = require("./get-all-players/get-all-players.request");
const _updateplayersrequest = require("./update-players/update-players.request");
const _deleteplayershandler = require("./delete-players/delete-players.handler");
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
let PlayersAdminController = class PlayersAdminController {
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
        typeof _createplayersrequest.CreatePlayersRequest === "undefined" ? Object : _createplayersrequest.CreatePlayersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PlayersAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallplayersrequest.GetAllPlayersRequest === "undefined" ? Object : _getallplayersrequest.GetAllPlayersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PlayersAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updateplayersrequest.UpdatePlayersRequest === "undefined" ? Object : _updateplayersrequest.UpdatePlayersRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PlayersAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], PlayersAdminController.prototype, "delete", null);
PlayersAdminController = _ts_decorate([
    (0, _common.Controller)('admin/players'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createplayershandler.CreatePlayersHandler === "undefined" ? Object : _createplayershandler.CreatePlayersHandler,
        typeof _getallplayershandler.GetAllPlayersHandler === "undefined" ? Object : _getallplayershandler.GetAllPlayersHandler,
        typeof _updateplayershandler.UpdatePlayersHandler === "undefined" ? Object : _updateplayershandler.UpdatePlayersHandler,
        typeof _deleteplayershandler.DeletePlayersHandler === "undefined" ? Object : _deleteplayershandler.DeletePlayersHandler
    ])
], PlayersAdminController);

//# sourceMappingURL=players.admin.controller.js.map