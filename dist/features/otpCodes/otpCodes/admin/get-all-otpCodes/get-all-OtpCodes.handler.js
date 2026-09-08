"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllOtpCodesHandler", {
    enumerable: true,
    get: function() {
        return GetAllOtpCodesHandler;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _paginationfilter = require("../../../../common/pagination.filter");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallOtpCodesrequest = require("./get-all-OtpCodes.request");
const _otpCodesentities = require("../../../entities/otpCodes.entities");
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
let GetAllOtpCodesHandler = class GetAllOtpCodesHandler {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 10;
        const skip = (currentPage - 1) * take;
        const [data, totalCount] = await _otpCodesentities.OtpCodesEntity.findAndCount({
            take,
            skip,
            order: {
                id: 'DESC'
            }
        });
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        return {
            totalCount,
            totalPages,
            data,
            hasPrevious,
            hasNext,
            currentPage
        };
    }
};
_ts_decorate([
    (0, _swagger.ApiOkResponse)({
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallOtpCodesrequest.GetAllOtpCodesRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllOtpCodesHandler.prototype, "execute", null);
GetAllOtpCodesHandler = _ts_decorate([
    (0, _common.Injectable)()
], GetAllOtpCodesHandler);

//# sourceMappingURL=get-all-OtpCodes.handler.js.map