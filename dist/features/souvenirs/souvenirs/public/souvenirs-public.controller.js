"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirsPublicController", {
    enumerable: true,
    get: function() {
        return SouvenirsPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallsouvenirshandler = require("./get-all-souvenirs/get-all-souvenirs.handler");
const _paginationfilter = require("../../../common/pagination.filter");
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
let SouvenirsPublicController = class SouvenirsPublicController {
    async getAll(filter) {
        return await this.getAllSouvenirsHandler.execute(filter);
    }
    constructor(getAllSouvenirsHandler){
        this.getAllSouvenirsHandler = getAllSouvenirsHandler;
    }
};
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], SouvenirsPublicController.prototype, "getAll", null);
SouvenirsPublicController = _ts_decorate([
    (0, _common.Controller)('public/souvenirs'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallsouvenirshandler.GetAllSouvenirsHandlerPub === "undefined" ? Object : _getallsouvenirshandler.GetAllSouvenirsHandlerPub
    ])
], SouvenirsPublicController);

//# sourceMappingURL=souvenirs-public.controller.js.map