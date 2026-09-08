"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsViewsEntities", {
    enumerable: true,
    get: function() {
        return NewsViewsEntities;
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
let NewsViewsEntities = class NewsViewsEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], NewsViewsEntities.prototype, "userId", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", Number)
], NewsViewsEntities.prototype, "newsId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'timestamp'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], NewsViewsEntities.prototype, "firstDate", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'timestamp'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], NewsViewsEntities.prototype, "lastDate", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        default: 1
    }),
    _ts_metadata("design:type", Number)
], NewsViewsEntities.prototype, "count", void 0);
NewsViewsEntities = _ts_decorate([
    (0, _typeorm.Entity)('NewsViews')
], NewsViewsEntities);

//# sourceMappingURL=newsViews.entities.js.map