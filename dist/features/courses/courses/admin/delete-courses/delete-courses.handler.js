"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCoursesHandler", {
    enumerable: true,
    get: function() {
        return DeleteCoursesHandler;
    }
});
const _common = require("@nestjs/common");
const _coursesentities = require("../../../entities/courses-entities");
let DeleteCoursesHandler = class DeleteCoursesHandler {
    async execute(id) {
        const categories = await _coursesentities.CoursesEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Courses');
        return await _coursesentities.CoursesEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-courses.handler.js.map