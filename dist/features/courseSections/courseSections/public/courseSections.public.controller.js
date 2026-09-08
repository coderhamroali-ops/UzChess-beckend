"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseSectionsPublicController", {
    enumerable: true,
    get: function() {
        return CourseSectionsPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseSectionshandler = require("./get-all-courseSections/get-all-courseSections.handler");
const _getallcourseSectionsrequest = require("./get-all-courseSections/get-all-courseSections.request");
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
let CourseSectionsPublicController = class CourseSectionsPublicController {
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
        typeof _getallcourseSectionsrequest.GetAllCourseSectionsRequest === "undefined" ? Object : _getallcourseSectionsrequest.GetAllCourseSectionsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseSectionsPublicController.prototype, "getAll", null);
CourseSectionsPublicController = _ts_decorate([
    (0, _common.Controller)('public/course-sections'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseSectionshandler.GetAllCourseSectionsHandlerPub === "undefined" ? Object : _getallcourseSectionshandler.GetAllCourseSectionsHandlerPub
    ])
], CourseSectionsPublicController);

//# sourceMappingURL=courseSections.public.controller.js.map