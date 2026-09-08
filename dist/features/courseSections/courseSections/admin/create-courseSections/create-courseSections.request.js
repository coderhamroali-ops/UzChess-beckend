"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCourseSectionsRequest", {
    enumerable: true,
    get: function() {
        return CreateCourseSectionsRequest;
    }
});
const _classvalidator = require("class-validator");
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
let CreateCourseSectionsRequest = class CreateCourseSectionsRequest {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 44,
        description: 'Course ID'
    }),
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    _ts_metadata("design:type", Number)
], CreateCourseSectionsRequest.prototype, "courseId", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'Introduction',
        description: 'Course section title'
    }),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.MaxLength)(256),
    _ts_metadata("design:type", String)
], CreateCourseSectionsRequest.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiPropertyOptional)({
        example: 1,
        description: 'Section order'
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    _ts_metadata("design:type", Number)
], CreateCourseSectionsRequest.prototype, "order", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: '2026-08-24T15:08:26.504Z',
        description: 'Section date',
        type: String,
        format: 'date-time'
    }),
    (0, _classvalidator.IsDateString)(),
    _ts_metadata("design:type", String)
], CreateCourseSectionsRequest.prototype, "date", void 0);

//# sourceMappingURL=create-courseSections.request.js.map