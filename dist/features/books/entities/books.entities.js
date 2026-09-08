"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BooksEntity", {
    enumerable: true,
    get: function() {
        return BooksEntity;
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
let BooksEntity = class BooksEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "authorId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({}),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "categoryId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({}),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "languageId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({}),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "difficultyId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], BooksEntity.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'text'
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], BooksEntity.prototype, "description", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], BooksEntity.prototype, "image", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "price", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2,
        nullable: false
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "newPrice", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 1,
        nullable: false
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "rating", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: 0
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "reviewsCount", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "pages", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'date'
    }),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], BooksEntity.prototype, "pubDate", void 0);
BooksEntity = _ts_decorate([
    (0, _typeorm.Entity)('books')
], BooksEntity);

//# sourceMappingURL=books.entities.js.map