"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OtpCodesEntity", {
    enumerable: true,
    get: function() {
        return OtpCodesEntity;
    }
});
const _typeorm = require("typeorm");
const _enum = require("../../../core/enum/enum");
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
let OtpCodesEntity = class OtpCodesEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], OtpCodesEntity.prototype, "userId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 6
    }),
    _ts_metadata("design:type", String)
], OtpCodesEntity.prototype, "code", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'timestamp'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], OtpCodesEntity.prototype, "date", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.otpType
    }),
    _ts_metadata("design:type", typeof _enum.otpType === "undefined" ? Object : _enum.otpType)
], OtpCodesEntity.prototype, "type", void 0);
OtpCodesEntity = _ts_decorate([
    (0, _typeorm.Entity)('OtpCodes')
], OtpCodesEntity);

//# sourceMappingURL=otpCodes.entities.js.map