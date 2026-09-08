"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteUsersLessonsHandler", {
    enumerable: true,
    get: function() {
        return DeleteUsersLessonsHandler;
    }
});
const _common = require("@nestjs/common");
const _users_lessonsentities = require("../../../entities/users_lessons.entities");
let DeleteUsersLessonsHandler = class DeleteUsersLessonsHandler {
    async execute(id) {
        const lesson = await _users_lessonsentities.UsersLessonsEntity.findOneBy({
            id
        });
        if (!lesson) {
            throw new _common.NotFoundException('User lesson not found');
        }
        return await _users_lessonsentities.UsersLessonsEntity.remove(lesson);
    }
};

//# sourceMappingURL=delete-users_lessons.handler.js.map