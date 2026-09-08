"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseLikesHandler", {
    enumerable: true,
    get: function() {
        return CreateCourseLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _courseLikesentities = require("../../../entities/courseLikes.entities");
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
let CreateCourseLikesHandler = class CreateCourseLikesHandler {
    async execute(payload) {
        const likeExists = await _courseLikesentities.CourseLikesEntity.exists({
            where: {
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (likeExists) {
            throw new _common.ConflictException('This user already liked this course');
        }
        const newLike = _courseLikesentities.CourseLikesEntity.create({
            userId: payload.userId,
            courseId: payload.courseId,
            created: new Date(payload.created)
        });
        return await _courseLikesentities.CourseLikesEntity.save(newLike);
    }
};
CreateCourseLikesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateCourseLikesHandler);

//# sourceMappingURL=create-courseLikes.handler.js.map