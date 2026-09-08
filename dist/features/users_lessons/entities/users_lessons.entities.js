"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersLessonsEntity", {
    enumerable: true,
    get: function() {
        return UsersLessonsEntity;
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
let UsersLessonsEntity = class UsersLessonsEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], UsersLessonsEntity.prototype, "userId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], UsersLessonsEntity.prototype, "courseLessonId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        nullable: true
    }),
    _ts_metadata("design:type", Number)
], UsersLessonsEntity.prototype, "stoppedAt", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], UsersLessonsEntity.prototype, "isCompleted", void 0);
UsersLessonsEntity = _ts_decorate([
    (0, _typeorm.Entity)('users_lessons')
], UsersLessonsEntity);

//# sourceMappingURL=users_lessons.entities.js.map