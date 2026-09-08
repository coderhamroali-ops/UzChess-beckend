"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoursesEntities", {
    enumerable: true,
    get: function() {
        return CoursesEntities;
    }
});
const _typeorm = require("typeorm");
const _BaseModel = require("../../../core/BaseModel");
const _swagger = require("@nestjs/swagger");
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
let CoursesEntities = class CoursesEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "authorId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "categoryId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "languageId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "difficultyId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    _ts_metadata("design:type", String)
], CoursesEntities.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CoursesEntities.prototype, "image", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "price", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2,
        nullable: true
    }),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "newPrice", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], CoursesEntities.prototype, "isPublished", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: 0
    }),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "reviewsCount", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 2,
        scale: 1
    }),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "rating", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: 0
    }),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "sectionsCount", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: 0
    }),
    _ts_metadata("design:type", Number)
], CoursesEntities.prototype, "lessonsCount", void 0);
CoursesEntities = _ts_decorate([
    (0, _typeorm.Entity)('courses')
], CoursesEntities);

//# sourceMappingURL=courses-entities.js.map