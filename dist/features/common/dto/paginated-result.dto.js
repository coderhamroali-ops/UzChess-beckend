"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get PaginatedResultDto () {
        return PaginatedResultDto;
    },
    get PaginatedResultDtoT () {
        return PaginatedResultDtoT;
    }
});
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
let PaginatedResultDto = class PaginatedResultDto {
};
function PaginatedResultDtoT(Dto) {
    let PaginatedResultDto = class PaginatedResultDto {
    };
    _ts_decorate([
        (0, _swagger.ApiProperty)(),
        _ts_metadata("design:type", Number)
    ], PaginatedResultDto.prototype, "totalCount", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)(),
        _ts_metadata("design:type", Number)
    ], PaginatedResultDto.prototype, "totalPages", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)(),
        _ts_metadata("design:type", Number)
    ], PaginatedResultDto.prototype, "currentPage", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)(),
        _ts_metadata("design:type", Boolean)
    ], PaginatedResultDto.prototype, "hasPrevious", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)(),
        _ts_metadata("design:type", Boolean)
    ], PaginatedResultDto.prototype, "hasNext", void 0);
    _ts_decorate([
        (0, _swagger.ApiProperty)({
            type: [
                Dto
            ]
        }),
        _ts_metadata("design:type", Array)
    ], PaginatedResultDto.prototype, "data", void 0);
    return PaginatedResultDto;
}

//# sourceMappingURL=paginated-result.dto.js.map