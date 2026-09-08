"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersEntities", {
    enumerable: true,
    get: function() {
        return UsersEntities;
    }
});
const _typeorm = require("typeorm");
const _BaseModel = require("../../../core/BaseModel");
const _enum = require("../../../core/enum/enum");
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
let UsersEntities = class UsersEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.role,
        default: 'user'
    }),
    _ts_metadata("design:type", typeof _enum.role === "undefined" ? Object : _enum.role)
], UsersEntities.prototype, "role", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 64
    }),
    _ts_metadata("design:type", String)
], UsersEntities.prototype, "fullName", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], UsersEntities.prototype, "profileImage", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 64,
        unique: true
    }),
    _ts_metadata("design:type", String)
], UsersEntities.prototype, "login", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.loginType
    }),
    _ts_metadata("design:type", typeof _enum.loginType === "undefined" ? Object : _enum.loginType)
], UsersEntities.prototype, "loginType", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], UsersEntities.prototype, "password", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'date',
        nullable: true
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], UsersEntities.prototype, "birthDate", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], UsersEntities.prototype, "isVerified", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], UsersEntities.prototype, "isActive", void 0);
UsersEntities = _ts_decorate([
    (0, _typeorm.Entity)('users')
], UsersEntities);

//# sourceMappingURL=users.entities.js.map