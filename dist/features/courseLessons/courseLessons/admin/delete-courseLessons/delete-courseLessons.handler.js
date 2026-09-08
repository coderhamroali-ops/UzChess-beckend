"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCourseLessonsHandler", {
    enumerable: true,
    get: function() {
        return DeleteCourseLessonsHandler;
    }
});
const _common = require("@nestjs/common");
const _courseLessonsentities = require("../../../entities/courseLessons.entities");
let DeleteCourseLessonsHandler = class DeleteCourseLessonsHandler {
    async execute(id) {
        const lesson = await _courseLessonsentities.CourseLessonsEntity.findOneBy({
            id
        });
        if (!lesson) {
            throw new _common.NotFoundException('Course lesson not found');
        }
        return await _courseLessonsentities.CourseLessonsEntity.remove(lesson);
    }
};

//# sourceMappingURL=delete-courseLessons.handler.js.map