"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCourseSectionsHandler", {
    enumerable: true,
    get: function() {
        return DeleteCourseSectionsHandler;
    }
});
const _common = require("@nestjs/common");
const _courseSectionsentities = require("../../../entities/courseSections.entities");
let DeleteCourseSectionsHandler = class DeleteCourseSectionsHandler {
    async execute(id) {
        const section = await _courseSectionsentities.CourseSectionsEntity.findOneBy({
            id: id
        });
        if (!section) {
            throw new _common.NotFoundException('Course section not found');
        }
        return await _courseSectionsentities.CourseSectionsEntity.remove(section);
    }
};

//# sourceMappingURL=delete-courseSections.handler.js.map