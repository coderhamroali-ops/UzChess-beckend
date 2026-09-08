"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUsersRequest", {
    enumerable: true,
    get: function() {
        return CreateUsersRequest;
    }
});
const _classvalidator = require("class-validator");
const _swagger = require("@nestjs/swagger");
const _enum = require("../../../../../core/enum/enum");
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
let CreateUsersRequest = class CreateUsersRequest {
};
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.role),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.role === "undefined" ? Object : _enum.role)
], CreateUsersRequest.prototype, "role", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateUsersRequest.prototype, "fullName", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)({
        required: false
    }),
    _ts_metadata("design:type", String)
], CreateUsersRequest.prototype, "profileImage", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateUsersRequest.prototype, "login", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.loginType),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.loginType === "undefined" ? Object : _enum.loginType)
], CreateUsersRequest.prototype, "loginType", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)({
        required: false
    }),
    _ts_metadata("design:type", String)
], CreateUsersRequest.prototype, "password", void 0);
_ts_decorate([
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)(),
    (0, _swagger.ApiProperty)({
        required: false
    }),
    _ts_metadata("design:type", String)
], CreateUsersRequest.prototype, "birthDate", void 0);
_ts_decorate([
    (0, _classvalidator.IsBoolean)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Boolean)
], CreateUsersRequest.prototype, "isVerified", void 0);
_ts_decorate([
    (0, _classvalidator.IsBoolean)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Boolean)
], CreateUsersRequest.prototype, "isActive", void 0);

//# sourceMappingURL=create-user.request.js.map