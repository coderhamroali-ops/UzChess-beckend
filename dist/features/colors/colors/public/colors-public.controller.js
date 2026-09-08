"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColorsPublicController", {
    enumerable: true,
    get: function() {
        return ColorsPublicController;
    }
});
const _getallcolorshandler = require("./get-all-colors/get-all-colors.handler");
const _common = require("@nestjs/common");
const _getallcolorsrequest = require("./get-all-colors/get-all-colors.request");
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
let ColorsPublicController = class ColorsPublicController {
    async getAll(filter) {
        return await this.getAllHandler.execute(filter);
    }
    constructor(getAllHandler){
        this.getAllHandler = getAllHandler;
    }
};
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcolorsrequest.GetAllColorsRequest === "undefined" ? Object : _getallcolorsrequest.GetAllColorsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], ColorsPublicController.prototype, "getAll", null);
ColorsPublicController = _ts_decorate([
    (0, _common.Controller)('public/colors'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcolorshandler.GetAllColorsHandlerP === "undefined" ? Object : _getallcolorshandler.GetAllColorsHandlerP
    ])
], ColorsPublicController);

//# sourceMappingURL=colors-public.controller.js.map