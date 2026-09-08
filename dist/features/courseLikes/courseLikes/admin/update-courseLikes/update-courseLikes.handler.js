"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCourseLikesHandler", {
    enumerable: true,
    get: function() {
        return UpdateCourseLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
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
let UpdateCourseLikesHandler = class UpdateCourseLikesHandler {
    async execute(id, payload) {
        const like = await _courseLikesentities.CourseLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Course like not found');
        }
        const likeExists = await _courseLikesentities.CourseLikesEntity.exists({
            where: {
                id: (0, _typeorm.Not)(like.id),
                userId: payload.userId,
                courseId: payload.courseId
            }
        });
        if (likeExists) {
            throw new _common.ConflictException('This user already liked this course');
        }
        like.userId = payload.userId;
        like.courseId = payload.courseId;
        like.created = new Date(payload.created);
        return await _courseLikesentities.CourseLikesEntity.save(like);
    }
};
UpdateCourseLikesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCourseLikesHandler);

//# sourceMappingURL=update-courseLikes.handler.js.map