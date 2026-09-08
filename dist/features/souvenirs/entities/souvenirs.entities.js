"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirsEntities", {
    enumerable: true,
    get: function() {
        return SouvenirsEntities;
    }
});
const _BaseModel = require("../../../core/BaseModel");
const _typeorm = require("typeorm");
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
let SouvenirsEntities = class SouvenirsEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    _ts_metadata("design:type", String)
], SouvenirsEntities.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'text'
    }),
    _ts_metadata("design:type", String)
], SouvenirsEntities.prototype, "description", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2
    }),
    _ts_metadata("design:type", Number)
], SouvenirsEntities.prototype, "price", void 0);
SouvenirsEntities = _ts_decorate([
    (0, _typeorm.Entity)()
], SouvenirsEntities);

//# sourceMappingURL=souvenirs.entities.js.map