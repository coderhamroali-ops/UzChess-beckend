"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUsersLessonsHandler", {
    enumerable: true,
    get: function() {
        return CreateUsersLessonsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateUsersLessonsHandler = class CreateUsersLessonsHandler {
    async execute(payload) {
        const lessonExists = await _users_lessonsentities.UsersLessonsEntity.exists({
            where: {
                userId: payload.userId,
                courseLessonId: payload.courseLessonId
            }
        });
        if (lessonExists) {
            throw new _common.ConflictException('This user lesson already exists');
        }
        const newLesson = _users_lessonsentities.UsersLessonsEntity.create({
            userId: payload.userId,
            courseLessonId: payload.courseLessonId,
            stoppedAt: payload.stoppedAt,
            isCompleted: payload.isCompleted
        });
        return await _users_lessonsentities.UsersLessonsEntity.save(newLesson);
    }
};
CreateUsersLessonsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateUsersLessonsHandler);

//# sourceMappingURL=create-users_lessons.handler.js.map