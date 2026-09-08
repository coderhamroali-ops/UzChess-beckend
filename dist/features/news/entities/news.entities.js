"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NewsEntities", {
    enumerable: true,
    get: function() {
        return NewsEntities;
    }
});
const _typeorm = require("typeorm");
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
let NewsEntities = class NewsEntities extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _typeorm.Column)({
        length: 265
    }),
    _ts_metadata("design:type", String)
], NewsEntities.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        length: 128
    }),
    _ts_metadata("design:type", String)
], NewsEntities.prototype, "image", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'text'
    }),
    _ts_metadata("design:type", String)
], NewsEntities.prototype, "content", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'timestamp'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], NewsEntities.prototype, "date", void 0);
NewsEntities = _ts_decorate([
    (0, _typeorm.Entity)('News')
], NewsEntities);

//# sourceMappingURL=news.entities.js.map