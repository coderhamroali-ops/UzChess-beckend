"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportsEntity", {
    enumerable: true,
    get: function() {
        return ReportsEntity;
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
let ReportsEntity = class ReportsEntity extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], ReportsEntity.prototype, "userId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], ReportsEntity.prototype, "categoryId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.reportType
    }),
    _ts_metadata("design:type", typeof _enum.reportType === "undefined" ? Object : _enum.reportType)
], ReportsEntity.prototype, "target", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], ReportsEntity.prototype, "targetId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 256,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], ReportsEntity.prototype, "description", void 0);
ReportsEntity = _ts_decorate([
    (0, _typeorm.Entity)('reports')
], ReportsEntity);

//# sourceMappingURL=reports.entities.js.map