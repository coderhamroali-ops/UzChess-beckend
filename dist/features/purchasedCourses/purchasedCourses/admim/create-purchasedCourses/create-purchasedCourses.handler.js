"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePurchasedCoursesHandler", {
    enumerable: true,
    get: function() {
        return CreatePurchasedCoursesHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreatePurchasedCoursesHandler = class CreatePurchasedCoursesHandler {
    async execute(payload) {
        const courseExists = await _purchasedCoursesentities.PurchasedCoursesEntity.exists({
            where: {
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (courseExists) {
            throw new _common.ConflictException('This course has already been purchased by this user');
        }
        const purchasedCourse = _purchasedCoursesentities.PurchasedCoursesEntity.create({
            userId: payload.userId,
            courseId: payload.courseId,
            isCompleted: payload.isCompleted,
            date: new Date(payload.date)
        });
        return await _purchasedCoursesentities.PurchasedCoursesEntity.save(purchasedCourse);
    }
};
CreatePurchasedCoursesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreatePurchasedCoursesHandler);

//# sourceMappingURL=create-purchasedCourses.handler.js.map