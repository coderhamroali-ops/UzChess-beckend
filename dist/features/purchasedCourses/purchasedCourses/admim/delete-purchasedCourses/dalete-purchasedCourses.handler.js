"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeletePurchasedCoursesHandler", {
    enumerable: true,
    get: function() {
        return DeletePurchasedCoursesHandler;
    }
});
const _common = require("@nestjs/common");
const _purchasedCoursesentities = require("../../../entities/purchasedCourses.entities");
let DeletePurchasedCoursesHandler = class DeletePurchasedCoursesHandler {
    async execute(id) {
        const purchasedCourse = await _purchasedCoursesentities.PurchasedCoursesEntity.findOneBy({
            id
        });
        if (!purchasedCourse) {
            throw new _common.NotFoundException('Purchased course not found');
        }
        return await _purchasedCoursesentities.PurchasedCoursesEntity.remove(purchasedCourse);
    }
};

//# sourceMappingURL=dalete-purchasedCourses.handler.js.map