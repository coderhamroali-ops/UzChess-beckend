"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCourseLikesHandler", {
    enumerable: true,
    get: function() {
        return DeleteCourseLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _courseLikesentities = require("../../../entities/courseLikes.entities");
let DeleteCourseLikesHandler = class DeleteCourseLikesHandler {
    async execute(id) {
        const like = await _courseLikesentities.CourseLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Course like not found');
        }
        return await _courseLikesentities.CourseLikesEntity.remove(like);
    }
};

//# sourceMappingURL=delete-courseLikes.handler.js.map