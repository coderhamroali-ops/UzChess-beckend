"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseCategoriesPublicController", {
    enumerable: true,
    get: function() {
        return CourseCategoriesPublicController;
    }
});
const _getallcourseCategorieshandler = require("./get-all-courseCategories/get-all-courseCategories.handler");
const _common = require("@nestjs/common");
const _getallcourseCategoriesrequest = require("./get-all-courseCategories/get-all-courseCategories.request");
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
let CourseCategoriesPublicController = class CourseCategoriesPublicController {
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
        typeof _getallcourseCategoriesrequest.GetAllCourseCategoriesRequest === "undefined" ? Object : _getallcourseCategoriesrequest.GetAllCourseCategoriesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseCategoriesPublicController.prototype, "getAll", null);
CourseCategoriesPublicController = _ts_decorate([
    (0, _common.Controller)('public/courseCategories'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseCategorieshandler.GetAllCourseCategoriesHandlerP === "undefined" ? Object : _getallcourseCategorieshandler.GetAllCourseCategoriesHandlerP
    ])
], CourseCategoriesPublicController);

//# sourceMappingURL=courseCategories-public.controller.js.map