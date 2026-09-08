"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCourseLessonsHandler", {
    enumerable: true,
    get: function() {
        return UpdateCourseLessonsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _courseLessonsentities = require("../../../entities/courseLessons.entities");
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
let UpdateCourseLessonsHandler = class UpdateCourseLessonsHandler {
    async execute(id, payload) {
        const lesson = await _courseLessonsentities.CourseLessonsEntity.findOneBy({
            id
        });
        if (!lesson) {
            throw new _common.NotFoundException('Course lesson not found');
        }
        const lessonExists = await _courseLessonsentities.CourseLessonsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(lesson.id),
                courseId: payload.courseId,
                courseSectionId: payload.courseSectionId,
                title: payload.title
            }
        });
        if (lessonExists) {
            throw new _common.ConflictException('Course lesson already exists');
        }
        lesson.courseId = payload.courseId;
        lesson.courseSectionId = payload.courseSectionId;
        lesson.title = payload.title;
        lesson.content = payload.content;
        lesson.thumbnail = payload.thumbnail;
        lesson.video = payload.video;
        lesson.order = payload.order;
        lesson.date = payload.date;
        lesson.isFree = payload.isFree;
        return await _courseLessonsentities.CourseLessonsEntity.save(lesson);
    }
};
UpdateCourseLessonsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCourseLessonsHandler);

//# sourceMappingURL=update-courseLessons.handler.js.map