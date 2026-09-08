"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateNewsViewsRequest", {
    enumerable: true,
    get: function() {
        return UpdateNewsViewsRequest;
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
let UpdateNewsViewsRequest = class UpdateNewsViewsRequest {
};
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.MaxLength)(34),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateNewsViewsRequest.prototype, "userId", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.MaxLength)(34),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateNewsViewsRequest.prototype, "newsId", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateNewsViewsRequest.prototype, "firstDate", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateNewsViewsRequest.prototype, "lastDate", void 0);
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateNewsViewsRequest.prototype, "count", void 0);

//# sourceMappingURL=update-NewsViews.request.js.map