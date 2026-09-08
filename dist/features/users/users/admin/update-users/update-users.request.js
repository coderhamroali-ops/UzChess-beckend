"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateUsersRequest", {
    enumerable: true,
    get: function() {
        return UpdateUsersRequest;
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
let UpdateUsersRequest = class UpdateUsersRequest {
};
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.role),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.role === "undefined" ? Object : _enum.role)
], UpdateUsersRequest.prototype, "role", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateUsersRequest.prototype, "fullName", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateUsersRequest.prototype, "profileImage", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(64),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateUsersRequest.prototype, "login", void 0);
_ts_decorate([
    (0, _classvalidator.IsEnum)(_enum.loginType),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof _enum.loginType === "undefined" ? Object : _enum.loginType)
], UpdateUsersRequest.prototype, "loginType", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.MaxLength)(128),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], UpdateUsersRequest.prototype, "password", void 0);
_ts_decorate([
    (0, _classvalidator.IsDateString)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UpdateUsersRequest.prototype, "birthDate", void 0);
_ts_decorate([
    (0, _classvalidator.IsBoolean)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Boolean)
], UpdateUsersRequest.prototype, "isVerified", void 0);
_ts_decorate([
    (0, _classvalidator.IsBoolean)(),
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", Boolean)
], UpdateUsersRequest.prototype, "isActive", void 0);

//# sourceMappingURL=update-users.request.js.map