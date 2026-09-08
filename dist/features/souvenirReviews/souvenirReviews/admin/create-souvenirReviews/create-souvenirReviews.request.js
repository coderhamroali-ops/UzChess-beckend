"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirReviewsRequest", {
    enumerable: true,
    get: function() {
        return CreateSouvenirReviewsRequest;
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
let CreateSouvenirReviewsRequest = class CreateSouvenirReviewsRequest {
};
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CreateSouvenirReviewsRequest.prototype, "userId", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CreateSouvenirReviewsRequest.prototype, "souvenirId", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _classvalidator.Max)(5),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CreateSouvenirReviewsRequest.prototype, "rating", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(512),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateSouvenirReviewsRequest.prototype, "comment", void 0);

//# sourceMappingURL=create-souvenirReviews.request.js.map