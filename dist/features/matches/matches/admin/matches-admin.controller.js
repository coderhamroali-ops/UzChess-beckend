"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MatchesAdminController", {
    enumerable: true,
    get: function() {
        return MatchesAdminController;
    }
});
const _creatematcheshendler = require("./create-matches/create-matches.hendler");
const _common = require("@nestjs/common");
const _creatematchesrequest = require("./create-matches/create-matches.request");
const _getallmatcheshandler = require("./get-all-matches/get-all-matches.handler");
const _getallmatchesrequest = require("./get-all-matches/get-all-matches.request");
const _updatematcheshandler = require("./update-matches/update-matches.handler");
const _deletehandler = require("./delete-matches/delete-handler");
const _updatematchesrequest = require("./update-matches/update-matches.request");
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
let MatchesAdminController = class MatchesAdminController {
    async create(payload) {
        return await this.createHandler.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllHandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updeteHandler.execute(id, payload);
    }
    async delete(id) {
        return await this.deleteHandler.execute(id);
    }
    constructor(createHandler, getAllHandler, updeteHandler, deleteHandler){
        this.createHandler = createHandler;
        this.getAllHandler = getAllHandler;
        this.updeteHandler = updeteHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _creatematchesrequest.CreateMatchesRequest === "undefined" ? Object : _creatematchesrequest.CreateMatchesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], MatchesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallmatchesrequest.GetAllMatchesRequest === "undefined" ? Object : _getallmatchesrequest.GetAllMatchesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], MatchesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatematchesrequest.UpdateMatchesRequest === "undefined" ? Object : _updatematchesrequest.UpdateMatchesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], MatchesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], MatchesAdminController.prototype, "delete", null);
MatchesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/Matches'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _creatematcheshendler.CreateMatchesHandler === "undefined" ? Object : _creatematcheshendler.CreateMatchesHandler,
        typeof _getallmatcheshandler.GetAllMatchesHandler === "undefined" ? Object : _getallmatcheshandler.GetAllMatchesHandler,
        typeof _updatematcheshandler.UpdateMatchesHandler === "undefined" ? Object : _updatematcheshandler.UpdateMatchesHandler,
        typeof _deletehandler.DeleteMatchesHandler === "undefined" ? Object : _deletehandler.DeleteMatchesHandler
    ])
], MatchesAdminController);

//# sourceMappingURL=matches-admin.controller.js.map