"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseCategoriesHandler", {
    enumerable: true,
    get: function() {
        return CreateCourseCategoriesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _courseCategoriesentities = require("../../../entities/courseCategories.entities");
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
let CreateCourseCategoriesHandler = class CreateCourseCategoriesHandler {
    async execute(payload) {
        const titleExists = await this.courseCategoriesRepository.existsBy({
            title: (0, _typeorm1.ILike)(payload.title)
        });
        if (titleExists) {
            throw new _common.ConflictException('Title already exists');
        }
        const newCategory = this.courseCategoriesRepository.create({
            title: payload.title
        });
        return await this.courseCategoriesRepository.save(newCategory);
    }
    constructor(courseCategoriesRepository){
        this.courseCategoriesRepository = courseCategoriesRepository;
    }
};
CreateCourseCategoriesHandler = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_courseCategoriesentities.CourseCategoriesEntities)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], CreateCourseCategoriesHandler);

//# sourceMappingURL=create-courseCategories.handler.js.map