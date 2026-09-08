"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBooksRequest", {
    enumerable: true,
    get: function() {
        return UpdateBooksRequest;
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
let UpdateBooksRequest = class UpdateBooksRequest {
};
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "authorId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "categoryId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "languageId", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "difficultyId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateBooksRequest.prototype, "title", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateBooksRequest.prototype, "description", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateBooksRequest.prototype, "image", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 2
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "price", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 2
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "newPrice", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsNumber)({
        maxDecimalPlaces: 1
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "rating", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "reviewsCount", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "pages", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Date),
    (0, _classvalidator.IsDate)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateBooksRequest.prototype, "pubDate", void 0);

//# sourceMappingURL=update-books.request.js.map