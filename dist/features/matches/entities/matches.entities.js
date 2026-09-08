"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MatchesEntities", {
    enumerable: true,
    get: function() {
        return MatchesEntities;
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
let MatchesEntities = class MatchesEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], MatchesEntities.prototype, "firstPlayer", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], MatchesEntities.prototype, "firstPlayerResult", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], MatchesEntities.prototype, "secondPlayer", void 0);
_ts_decorate([
    (0, _typeorm.Column)({}),
    _ts_metadata("design:type", Number)
], MatchesEntities.prototype, "secondPlayerResult", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.MatchType
    }),
    _ts_metadata("design:type", typeof _enum.MatchType === "undefined" ? Object : _enum.MatchType)
], MatchesEntities.prototype, "type", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], MatchesEntities.prototype, "moves", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'date'
    }),
    _ts_metadata("design:type", String)
], MatchesEntities.prototype, "date", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: _enum.winnerType
    }),
    _ts_metadata("design:type", typeof _enum.winnerType === "undefined" ? Object : _enum.winnerType)
], MatchesEntities.prototype, "winner", void 0);
MatchesEntities = _ts_decorate([
    (0, _typeorm.Entity)('Matches')
], MatchesEntities);

//# sourceMappingURL=matches.entities.js.map