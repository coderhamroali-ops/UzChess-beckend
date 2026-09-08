"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCourseReviewsHandler", {
    enumerable: true,
    get: function() {
        return UpdateCourseReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
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
let UpdateCourseReviewsHandler = class UpdateCourseReviewsHandler {
    async execute(id, payload) {
        const review = await _courseReviewsentities.CourseReviewsEntity.findOneBy({
            id
        });
        if (!review) {
            throw new _common.NotFoundException('Course review not found');
        }
        const reviewExists = await _courseReviewsentities.CourseReviewsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(review.id),
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('This user already reviewed this course');
        }
        review.userId = payload.userId;
        review.courseId = payload.courseId;
        review.rating = payload.rating;
        review.comment = payload.comment;
        review.created = new Date(payload.created);
        return await _courseReviewsentities.CourseReviewsEntity.save(review);
    }
};
UpdateCourseReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCourseReviewsHandler);

//# sourceMappingURL=update-courseReviews.handler.js.map