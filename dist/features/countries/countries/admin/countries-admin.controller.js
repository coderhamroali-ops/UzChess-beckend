"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CountriesAdminController", {
    enumerable: true,
    get: function() {
        return CountriesAdminController;
    }
});
const _common = require("@nestjs/common");
const _createcountriesrequest = require("./create-countries/create-countries.request");
const _createcountrieshandler = require("./create-countries/create-countries.handler");
const _getallcountriesrequest = require("./get-all-countries/get-all-countries.request");
const _getallcountrieshandler = require("./get-all-countries/get-all-countries.handler");
const _updatecountriesrequest = require("./update-countries/update-countries.request");
const _updatecountrieshandler = require("./update-countries/update-countries.handler");
const _deletecountrieshandler = require("./delete-countries/delete-countries.handler");
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
let CountriesAdminController = class CountriesAdminController {
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
        typeof _createcountriesrequest.CreateCountriesRequest === "undefined" ? Object : _createcountriesrequest.CreateCountriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CountriesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcountriesrequest.GetAllCountriesRequest === "undefined" ? Object : _getallcountriesrequest.GetAllCountriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CountriesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecountriesrequest.UpdateCountriesRequest === "undefined" ? Object : _updatecountriesrequest.UpdateCountriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CountriesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CountriesAdminController.prototype, "delete", null);
CountriesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/countries'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcountrieshandler.CreateCountriesHandler === "undefined" ? Object : _createcountrieshandler.CreateCountriesHandler,
        typeof _getallcountrieshandler.GetAllCountriesHandler === "undefined" ? Object : _getallcountrieshandler.GetAllCountriesHandler,
        typeof _updatecountrieshandler.UpdateCountriesHandler === "undefined" ? Object : _updatecountrieshandler.UpdateCountriesHandler,
        typeof _deletecountrieshandler.DeleteCountriesHandler === "undefined" ? Object : _deletecountrieshandler.DeleteCountriesHandler
    ])
], CountriesAdminController);

//# sourceMappingURL=countries-admin.controller.js.map