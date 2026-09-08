"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseReviewsModule", {
    enumerable: true,
    get: function() {
        return CourseReviewsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _courseReviewsentities = require("./entities/courseReviews.entities");
const _courseReviewsadmincontroller = require("./courseReviews/admin/courseReviews-admin.controller");
const _courseReviewspubliccontroller = require("./courseReviews/public/courseReviews-public.controller");
const _createcourseReviewshandler = require("./courseReviews/admin/create-courseReviews/create-courseReviews.handler");
const _getallcourseReviewshandler = require("./courseReviews/admin/get-all-courseReviews/get-all-courseReviews.handler");
const _getallcourseReviewshandler1 = require("./courseReviews/public/get-all-courseReviews/get-all-courseReviews.handler");
const _updatecourseReviewshandler = require("./courseReviews/admin/update-courseReviews/update-courseReviews.handler");
const _deletecourseReviewshandler = require("./courseReviews/admin/delete-courseReviews/delete-courseReviews.handler");
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
let CourseReviewsModule = class CourseReviewsModule {
};
CourseReviewsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _courseReviewsentities.CourseReviewsEntity
            ])
        ],
        controllers: [
            _courseReviewsadmincontroller.CourseReviewsAdminController,
            _courseReviewspubliccontroller.CourseReviewsPublicController
        ],
        providers: [
            _createcourseReviewshandler.CreateCourseReviewsHandler,
            _getallcourseReviewshandler.GetAllCourseReviewsHandler,
            _getallcourseReviewshandler1.GetAllCourseReviewsHandlerPub,
            _updatecourseReviewshandler.UpdateCourseReviewsHandler,
            _deletecourseReviewshandler.DeleteCourseReviewsHandler
        ]
    })
], CourseReviewsModule);

//# sourceMappingURL=courseReviews.module.js.map