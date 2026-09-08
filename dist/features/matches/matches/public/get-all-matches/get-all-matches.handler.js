"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllMatchesHandlerPublc", {
    enumerable: true,
    get: function() {
        return GetAllMatchesHandlerPublc;
    }
});
const _getallmatchesrequest = require("./get-all-matches.request");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _common = require("@nestjs/common");
const _matchesentities = require("../../../entities/matches.entities");
const _swagger = require("@nestjs/swagger");
const _paginationfilter = require("../../../../common/pagination.filter");
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
let GetAllMatchesHandlerPublc = class GetAllMatchesHandlerPublc {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await _matchesentities.MatchesEntities.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _matchesentities.MatchesEntities.find({
            select: {
                firstPlayer: true,
                firstPlayerResult: true,
                secondPlayer: true,
                secondPlayerResult: true,
                type: true,
                moves: true,
                date: true,
                winner: true
            },
            take: take,
            skip: skip
        });
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallmatchesrequest.GetAllMatchesRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllMatchesHandlerPublc.prototype, "execute", null);
GetAllMatchesHandlerPublc = _ts_decorate([
    (0, _common.Injectable)()
], GetAllMatchesHandlerPublc);

//# sourceMappingURL=get-all-matches.handler.js.map