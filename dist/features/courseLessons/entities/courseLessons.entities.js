"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseLessonsEntity", {
    enumerable: true,
    get: function() {
        return CourseLessonsEntity;
    }
});
const _typeorm = require("typeorm");
const _BaseModel = require("../../../core/BaseModel");
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
let CourseLessonsEntity = class CourseLessonsEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CourseLessonsEntity.prototype, "courseId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], CourseLessonsEntity.prototype, "courseSectionId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    _ts_metadata("design:type", String)
], CourseLessonsEntity.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'text',
        nullable: true
    }),
    _ts_metadata("design:type", String)
], CourseLessonsEntity.prototype, "content", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], CourseLessonsEntity.prototype, "thumbnail", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 256
    }),
    _ts_metadata("design:type", String)
], CourseLessonsEntity.prototype, "video", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    _ts_metadata("design:type", Number)
], CourseLessonsEntity.prototype, "order", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'timestamp'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CourseLessonsEntity.prototype, "date", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], CourseLessonsEntity.prototype, "isFree", void 0);
CourseLessonsEntity = _ts_decorate([
    (0, _typeorm.Entity)('course_lessons')
], CourseLessonsEntity);

//# sourceMappingURL=courseLessons.entities.js.map