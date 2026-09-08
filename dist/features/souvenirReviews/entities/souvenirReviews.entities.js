"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirReviewsEntity", {
    enumerable: true,
    get: function() {
        return SouvenirReviewsEntity;
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
let SouvenirReviewsEntity = class SouvenirReviewsEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], SouvenirReviewsEntity.prototype, "userId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], SouvenirReviewsEntity.prototype, "souvenirId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], SouvenirReviewsEntity.prototype, "rating", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 512,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], SouvenirReviewsEntity.prototype, "comment", void 0);
SouvenirReviewsEntity = _ts_decorate([
    (0, _typeorm.Entity)('souvenir_reviews')
], SouvenirReviewsEntity);

//# sourceMappingURL=souvenirReviews.entities.js.map