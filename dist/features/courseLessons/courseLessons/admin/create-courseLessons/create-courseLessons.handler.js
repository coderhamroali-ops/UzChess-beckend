"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseLessonsHandler", {
    enumerable: true,
    get: function() {
        return CreateCourseLessonsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateCourseLessonsHandler = class CreateCourseLessonsHandler {
    async execute(payload) {
        const lessonExists = await _courseLessonsentities.CourseLessonsEntity.exists({
            where: {
                courseId: payload.courseId,
                courseSectionId: payload.courseSectionId,
                title: payload.title
            }
        });
        if (lessonExists) {
            throw new _common.ConflictException('Course lesson already exists');
        }
        const newLesson = _courseLessonsentities.CourseLessonsEntity.create({
            courseId: payload.courseId,
            courseSectionId: payload.courseSectionId,
            title: payload.title,
            content: payload.content,
            thumbnail: payload.thumbnail,
            video: payload.video,
            order: payload.order,
            date: payload.date,
            isFree: payload.isFree
        });
        return await _courseLessonsentities.CourseLessonsEntity.save(newLesson);
    }
};
CreateCourseLessonsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateCourseLessonsHandler);

//# sourceMappingURL=create-courseLessons.handler.js.map