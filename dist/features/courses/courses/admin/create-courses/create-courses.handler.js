"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCoursesHandler", {
    enumerable: true,
    get: function() {
        return CreateCoursesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
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
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let CreateCoursesHandler = class CreateCoursesHandler {
    async execute(authorId, categoryId, languageId, difficultyId, title, image, price, newPrice, isPublished, reviewsCount, rating, sectionsCount, lessonsCount) {
        const titleExists = await this.coursesRepository.existsBy({
            title: (0, _typeorm1.ILike)(title)
        });
        if (titleExists) {
            throw new _common.ConflictException('Course with this title already exists');
        }
        const newCourse = this.coursesRepository.create({
            authorId,
            categoryId,
            languageId,
            difficultyId,
            title,
            image: image?.path,
            price,
            newPrice,
            isPublished,
            reviewsCount: reviewsCount ?? 0,
            rating,
            sectionsCount,
            lessonsCount
        });
        return await this.coursesRepository.save(newCourse);
    }
    constructor(coursesRepository){
        this.coursesRepository = coursesRepository;
    }
};
CreateCoursesHandler = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_coursesentities.CoursesEntities)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], CreateCoursesHandler);

//# sourceMappingURL=create-courses.handler.js.map