"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseReviewsPublicController", {
    enumerable: true,
    get: function() {
        return CourseReviewsPublicController;
    }
});
const _common = require("@nestjs/common");
const _getallcourseReviewshandler = require("./get-all-courseReviews/get-all-courseReviews.handler");
const _getallcourseReviewsrequest = require("./get-all-courseReviews/get-all-courseReviews.request");
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
let CourseReviewsPublicController = class CourseReviewsPublicController {
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
        typeof _getallcourseReviewsrequest.GetAllCourseReviewsRequest === "undefined" ? Object : _getallcourseReviewsrequest.GetAllCourseReviewsRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], CourseReviewsPublicController.prototype, "getAll", null);
CourseReviewsPublicController = _ts_decorate([
    (0, _common.Controller)('public/course-reviews'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallcourseReviewshandler.GetAllCourseReviewsHandlerPub === "undefined" ? Object : _getallcourseReviewshandler.GetAllCourseReviewsHandlerPub
    ])
], CourseReviewsPublicController);

//# sourceMappingURL=courseReviews-public.controller.js.map