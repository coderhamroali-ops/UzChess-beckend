"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PurchasedCoursesAdminController", {
    enumerable: true,
    get: function() {
        return PurchasedCoursesAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallpurchasedCourseshandler = require("./get-all-purchasedCourses/get-all-purchasedCourses.handler");
const _createpurchasedCourseshandler = require("./create-purchasedCourses/create-purchasedCourses.handler");
const _updatepurchasedCourseshandler = require("./update-purchasedCourses/update-purchasedCourses.handler");
const _daletepurchasedCourseshandler = require("./delete-purchasedCourses/dalete-purchasedCourses.handler");
const _createpurchasedCoursesrequest = require("./create-purchasedCourses/create-purchasedCourses.request");
const _getallpurchasedCoursesreques = require("./get-all-purchasedCourses/get-all-purchasedCourses.reques");
const _updatepurchasedCoursesrequest = require("./update-purchasedCourses/update-purchasedCourses.request");
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
let PurchasedCoursesAdminController = class PurchasedCoursesAdminController {
    async create(payload) {
        return await this.createPurchasedCourse.execute(payload);
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
    constructor(getAllHandler, createPurchasedCourse, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createPurchasedCourse = createPurchasedCourse;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createpurchasedCoursesrequest.CreatePurchasedCoursesRequest === "undefined" ? Object : _createpurchasedCoursesrequest.CreatePurchasedCoursesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PurchasedCoursesAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallpurchasedCoursesreques.GetAllPurchasedCoursesReques === "undefined" ? Object : _getallpurchasedCoursesreques.GetAllPurchasedCoursesReques
    ]),
    _ts_metadata("design:returntype", Promise)
], PurchasedCoursesAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatepurchasedCoursesrequest.UpdatePurchasedCoursesRequest === "undefined" ? Object : _updatepurchasedCoursesrequest.UpdatePurchasedCoursesRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PurchasedCoursesAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], PurchasedCoursesAdminController.prototype, "delete", null);
PurchasedCoursesAdminController = _ts_decorate([
    (0, _common.Controller)('admin/purchased-courses'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallpurchasedCourseshandler.GetAllPurchasedCoursesHandler === "undefined" ? Object : _getallpurchasedCourseshandler.GetAllPurchasedCoursesHandler,
        typeof _createpurchasedCourseshandler.CreatePurchasedCoursesHandler === "undefined" ? Object : _createpurchasedCourseshandler.CreatePurchasedCoursesHandler,
        typeof _updatepurchasedCourseshandler.UpdatePurchasedCoursesHandler === "undefined" ? Object : _updatepurchasedCourseshandler.UpdatePurchasedCoursesHandler,
        typeof _daletepurchasedCourseshandler.DeletePurchasedCoursesHandler === "undefined" ? Object : _daletepurchasedCourseshandler.DeletePurchasedCoursesHandler
    ])
], PurchasedCoursesAdminController);

//# sourceMappingURL=purchasedCourses-admin.controller.js.map