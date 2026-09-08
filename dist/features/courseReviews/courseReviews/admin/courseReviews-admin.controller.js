"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseReviewsAdminController", {
    enumerable: true,
    get: function() {
        return CourseReviewsAdminController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseReviewshandler = require("./get-all-courseReviews/get-all-courseReviews.handler");
const _createcourseReviewshandler = require("./create-courseReviews/create-courseReviews.handler");
const _updatecourseReviewshandler = require("./update-courseReviews/update-courseReviews.handler");
const _deletecourseReviewshandler = require("./delete-courseReviews/delete-courseReviews.handler");
const _createcourseReviewsrequest = require("./create-courseReviews/create-courseReviews.request");
const _getallcourseReviewsrequest = require("./get-all-courseReviews/get-all-courseReviews.request");
const _updatecourseReviewsrequest = require("./update-courseReviews/update-courseReviews.request");
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
let CourseReviewsAdminController = class CourseReviewsAdminController {
    async create(payload) {
        return await this.createReview.execute(payload);
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
    constructor(getAllHandler, createReview, updateHandler, deleteHandler){
        this.getAllHandler = getAllHandler;
        this.createReview = createReview;
        this.updateHandler = updateHandler;
        this.deleteHandler = deleteHandler;
    }
};
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createcourseReviewsrequest.CreateCourseReviewsRequest === "undefined" ? Object : _createcourseReviewsrequest.CreateCourseReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseReviewsAdminController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('list'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseReviewsrequest.GetAllCourseReviewsRequest === "undefined" ? Object : _getallcourseReviewsrequest.GetAllCourseReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseReviewsAdminController.prototype, "getAll", null);
_ts_decorate([
    (0, _common.Patch)('update/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _updatecourseReviewsrequest.UpdateCourseReviewsRequest === "undefined" ? Object : _updatecourseReviewsrequest.UpdateCourseReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseReviewsAdminController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)('delete/:id'),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseReviewsAdminController.prototype, "delete", null);
CourseReviewsAdminController = _ts_decorate([
    (0, _common.Controller)('admin/course-reviews'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseReviewshandler.GetAllCourseReviewsHandler === "undefined" ? Object : _getallcourseReviewshandler.GetAllCourseReviewsHandler,
        typeof _createcourseReviewshandler.CreateCourseReviewsHandler === "undefined" ? Object : _createcourseReviewshandler.CreateCourseReviewsHandler,
        typeof _updatecourseReviewshandler.UpdateCourseReviewsHandler === "undefined" ? Object : _updatecourseReviewshandler.UpdateCourseReviewsHandler,
        typeof _deletecourseReviewshandler.DeleteCourseReviewsHandler === "undefined" ? Object : _deletecourseReviewshandler.DeleteCourseReviewsHandler
    ])
], CourseReviewsAdminController);

//# sourceMappingURL=courseReviews-admin.controller.js.map