"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Entitybook", {
    enumerable: true,
    get: function() {
        return Entitybook;
    }
});
const _BaseModel = require("../../../core/BaseModel");
const _typeorm = require("typeorm");
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
let Entitybook = class Entitybook extends _BaseModel.BaseModel {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _typeorm.Column)({
        length: 64,
        unique: true
    }),
    _ts_metadata("design:type", String)
], Entitybook.prototype, "title", void 0);
Entitybook = _ts_decorate([
    (0, _typeorm.Entity)('book-categories')
], Entitybook);

//# sourceMappingURL=book-category.entities.js.map