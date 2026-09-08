"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCoursesRequest", {
    enumerable: true,
    get: function() {
        return UpdateCoursesRequest;
    }
});
const _classvalidator = require("class-validator");
const _classtransformer = require("class-transformer");
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
let UpdateCoursesRequest = class UpdateCoursesRequest {
};
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "authorId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "categoryId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsInt)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "languageId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsInt)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "difficultyId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.MaxLength)(128),
    _ts_metadata("design:type", String)
], UpdateCoursesRequest.prototype, "title", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.MaxLength)(128),
    _ts_metadata("design:type", String)
], UpdateCoursesRequest.prototype, "image", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 2
    }),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "price", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _swagger.ApiProperty)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 2
    }),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "newPrice", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], UpdateCoursesRequest.prototype, "isPublished", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsInt)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "reviewsCount", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 1
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "rating", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "sectionsCount", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateCoursesRequest.prototype, "lessonsCount", void 0);

//# sourceMappingURL=update-courses.request.js.map