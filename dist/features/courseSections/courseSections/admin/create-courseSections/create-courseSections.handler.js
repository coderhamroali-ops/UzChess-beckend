"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseSectionsHandler", {
    enumerable: true,
    get: function() {
        return CreateCourseSectionsHandler;
    }
});
const _common = require("@nestjs/common");
const _courseSectionsentities = require("../../../entities/courseSections.entities");
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
let CreateCourseSectionsHandler = class CreateCourseSectionsHandler {
    async execute(payload) {
        const titleExists = await _courseSectionsentities.CourseSectionsEntity.exists({
            where: {
                courseId: payload.courseId,
                title: payload.title
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Course section title already exists');
        }
        const newSection = _courseSectionsentities.CourseSectionsEntity.create({
            courseId: payload.courseId,
            title: payload.title,
            order: payload.order,
            date: payload.date
        });
        return await _courseSectionsentities.CourseSectionsEntity.save(newSection);
    }
};
CreateCourseSectionsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateCourseSectionsHandler);

//# sourceMappingURL=create-courseSections.handler.js.map