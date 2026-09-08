"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCourseCategoriesHandler", {
    enumerable: true,
    get: function() {
        return DeleteCourseCategoriesHandler;
    }
});
const _common = require("@nestjs/common");
const _courseCategoriesentities = require("../../../entities/courseCategories.entities");
let DeleteCourseCategoriesHandler = class DeleteCourseCategoriesHandler {
    async execute(id) {
        const categories = await _courseCategoriesentities.CourseCategoriesEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _courseCategoriesentities.CourseCategoriesEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-courseCategories.handler.js.map