"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUsersLessonsHandler", {
    enumerable: true,
    get: function() {
        return UpdateUsersLessonsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _users_lessonsentities = require("../../../entities/users_lessons.entities");
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
let UpdateUsersLessonsHandler = class UpdateUsersLessonsHandler {
    async execute(id, payload) {
        const lesson = await _users_lessonsentities.UsersLessonsEntity.findOneBy({
            id
        });
        if (!lesson) {
            throw new _common.NotFoundException('User lesson not found');
        }
        const lessonExists = await _users_lessonsentities.UsersLessonsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(lesson.id),
                userId: payload.userId,
                courseLessonId: payload.courseLessonId
            }
        });
        if (lessonExists) {
            throw new _common.ConflictException('This user lesson already exists');
        }
        lesson.userId = payload.userId;
        lesson.courseLessonId = payload.courseLessonId;
        lesson.stoppedAt = payload.stoppedAt;
        lesson.isCompleted = payload.isCompleted;
        return await _users_lessonsentities.UsersLessonsEntity.save(lesson);
    }
};
UpdateUsersLessonsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateUsersLessonsHandler);

//# sourceMappingURL=update-users_lessons.handler.js.map