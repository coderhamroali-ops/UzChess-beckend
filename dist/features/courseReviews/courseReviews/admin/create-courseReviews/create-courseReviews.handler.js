"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseReviewsHandler", {
    enumerable: true,
    get: function() {
        return CreateCourseReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _courseReviewsentities = require("../../../entities/courseReviews.entities");
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
let CreateCourseReviewsHandler = class CreateCourseReviewsHandler {
    async execute(payload) {
        const reviewExists = await _courseReviewsentities.CourseReviewsEntity.exists({
            where: {
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('This user already reviewed this course');
        }
        const newReview = _courseReviewsentities.CourseReviewsEntity.create({
            userId: payload.userId,
            courseId: payload.courseId,
            rating: payload.rating,
            comment: payload.comment,
            created: new Date(payload.created)
        });
        return await _courseReviewsentities.CourseReviewsEntity.save(newReview);
    }
};
CreateCourseReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateCourseReviewsHandler);

//# sourceMappingURL=create-courseReviews.handler.js.map