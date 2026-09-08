"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirImagesRequest", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirImagesRequest;
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
let UpdateSouvenirImagesRequest = class UpdateSouvenirImagesRequest {
};
_ts_decorate([
    (0, _classvalidator.IsInt)(),
    (0, _classvalidator.Min)(1),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], UpdateSouvenirImagesRequest.prototype, "souvenirId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsNotEmpty)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateSouvenirImagesRequest.prototype, "image", void 0);

//# sourceMappingURL=update-souvenirImages.request.js.map