"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LanguagesAdminController", {
    enumerable: true,
    get: function() {
        return LanguagesAdminController;
    }
});
const _createlanguageshandler = require("./create-languages/create-languages.handler");
const _common = require("@nestjs/common");
const _createlanguagesrequest = require("./create-languages/create-languages.request");
const _getallLanguageshandler = require("./get-all-languages/get-all-Languages-handler");
const _getallLanguagesrequest = require("./get-all-languages/get-all-Languages.request");
const _updatelanguagesrequest = require("./update-languages/update-languages.request");
const _updateLanguageshandler = require("./update-languages/update-Languages.handler");
const _deleteLanguageshandler = require("./delete-languages/delete-Languages.handler");
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
let LanguagesAdminController = class LanguagesAdminController {
    async create(payload) {
        return await this.createLanguages.execute(payload);
    }
    async getAll(filter) {
        return await this.getAllhandler.execute(filter);
    }
    async update(id, payload) {
        return await this.updateLanguages.execute(id, payload);
    }
    async delete(id) {
        return await this.deletehandler.execute(id);
    }
    constructor(createLanguages, getAllhandler, updateLanguages, deletehandler){
        this.createLanguages = createLanguages;
        this.getAllhandler = getAllhandler;
        this.updateLanguages = updateLanguages;
        this.deletehandler = deletehandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createlanguagesrequest.CreateLanguagesRequest === "undefined" ? Object : _createlanguagesrequest.CreateLanguagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], LanguagesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallLanguagesrequest.GetAllLanguagesRequest === "undefined" ? Object : _getallLanguagesrequest.GetAllLanguagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], LanguagesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatelanguagesrequest.UpdateLanguagesRequest === "undefined" ? Object : _updatelanguagesrequest.UpdateLanguagesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], LanguagesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], LanguagesAdminController.prototype, "delete", null);
LanguagesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/Languages'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createlanguageshandler.CreateLanguagesHandler === "undefined" ? Object : _createlanguageshandler.CreateLanguagesHandler,
        typeof _getallLanguageshandler.GetAllLanguagesHandler === "undefined" ? Object : _getallLanguageshandler.GetAllLanguagesHandler,
        typeof _updateLanguageshandler.UpdateLanguagesHandler === "undefined" ? Object : _updateLanguageshandler.UpdateLanguagesHandler,
        typeof _deleteLanguageshandler.DeleteLanguagesHandler === "undefined" ? Object : _deleteLanguageshandler.DeleteLanguagesHandler
    ])
], LanguagesAdminController);

//# sourceMappingURL=languages-admin.controller.js.map