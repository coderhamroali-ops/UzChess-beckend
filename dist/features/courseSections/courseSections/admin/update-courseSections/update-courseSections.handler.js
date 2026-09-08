"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCourseSectionsHandler", {
    enumerable: true,
    get: function() {
        return UpdateCourseSectionsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
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
let UpdateCourseSectionsHandler = class UpdateCourseSectionsHandler {
    async execute(id, payload) {
        const section = await _courseSectionsentities.CourseSectionsEntity.findOneBy({
            id: id
        });
        if (!section) {
            throw new _common.NotFoundException('Course section not found');
        }
        const titleExists = await _courseSectionsentities.CourseSectionsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(section.id),
                courseId: payload.courseId,
                title: payload.title
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Course section title already exists');
        }
        section.courseId = payload.courseId;
        section.title = payload.title;
        section.order = payload.order;
        section.date = new Date(payload.date);
        return await _courseSectionsentities.CourseSectionsEntity.save(section);
    }
};
UpdateCourseSectionsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCourseSectionsHandler);

//# sourceMappingURL=update-courseSections.handler.js.map