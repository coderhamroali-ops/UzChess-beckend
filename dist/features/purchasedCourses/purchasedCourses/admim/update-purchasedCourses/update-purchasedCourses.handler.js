"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePurchasedCoursesHandler", {
    enumerable: true,
    get: function() {
        return UpdatePurchasedCoursesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _purchasedCoursesentities = require("../../../entities/purchasedCourses.entities");
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
let UpdatePurchasedCoursesHandler = class UpdatePurchasedCoursesHandler {
    async execute(id, payload) {
        const purchasedCourse = await _purchasedCoursesentities.PurchasedCoursesEntity.findOneBy({
            id
        });
        if (!purchasedCourse) {
            throw new _common.NotFoundException('Purchased course not found');
        }
        const courseExists = await _purchasedCoursesentities.PurchasedCoursesEntity.exists({
            where: {
                id: (0, _typeorm.Not)(purchasedCourse.id),
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (courseExists) {
            throw new _common.ConflictException('This course has already been purchased by this user');
        }
        purchasedCourse.userId = payload.userId;
        purchasedCourse.courseId = payload.courseId;
        purchasedCourse.isCompleted = payload.isCompleted;
        purchasedCourse.date = new Date(payload.date);
        return await _purchasedCoursesentities.PurchasedCoursesEntity.save(purchasedCourse);
    }
};
UpdatePurchasedCoursesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdatePurchasedCoursesHandler);

//# sourceMappingURL=update-purchasedCourses.handler.js.map