"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCourseReviewsHandler", {
    enumerable: true,
    get: function() {
        return DeleteCourseReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _courseReviewsentities = require("../../../entities/courseReviews.entities");
let DeleteCourseReviewsHandler = class DeleteCourseReviewsHandler {
    async execute(id) {
        const review = await _courseReviewsentities.CourseReviewsEntity.findOneBy({
            id
        });
        if (!review) {
            throw new _common.NotFoundException('Course review not found');
        }
        return await _courseReviewsentities.CourseReviewsEntity.remove(review);
    }
};

//# sourceMappingURL=delete-courseReviews.handler.js.map