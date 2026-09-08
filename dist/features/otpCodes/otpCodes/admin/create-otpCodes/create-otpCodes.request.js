"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateOtpCodesRequest", {
    enumerable: true,
    get: function() {
        return CreateOtpCodesRequest;
    }
});
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _enum = require("../../../../../core/enum/enum");
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
let CreateOtpCodesRequest = class CreateOtpCodesRequest {
};
_ts_decorate([
    (0, _classtransformer.Type)(()=>Number),
    (0, _classvalidator.IsInt)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Number)
], CreateOtpCodesRequest.prototype, "userId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.Length)(6, 6),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateOtpCodesRequest.prototype, "code", void 0);
_ts_decorate([
    (0, _classtransformer.Type)(()=>Date),
    (0, _classvalidator.IsDate)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], CreateOtpCodesRequest.prototype, "date", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.otpType),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.otpType === "undefined" ? Object : _enum.otpType)
], CreateOtpCodesRequest.prototype, "type", void 0);

//# sourceMappingURL=create-otpCodes.request.js.map