"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCoursesHandler", {
    enumerable: true,
    get: function() {
        return UpdateCoursesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _coursesentities = require("../../../entities/courses-entities");
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
let UpdateCoursesHandler = class UpdateCoursesHandler {
    async execute(id, payload) {
        const category = await _coursesentities.CoursesEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('courses category not found');
        }
        const titleExists = await _coursesentities.CoursesEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        category.title = payload.title;
        return await _coursesentities.CoursesEntities.save(category);
    }
};
UpdateCoursesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCoursesHandler);

//# sourceMappingURL=update-courses.handler.js.map