"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllSouvenirLikesHandlerPub", {
    enumerable: true,
    get: function() {
        return GetAllSouvenirLikesHandlerPub;
    }
});
const _swagger = require("@nestjs/swagger");
const _paginationfilter = require("../../../../common/pagination.filter");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallsouvenirLikesrequest = require("./get-all-souvenirLikes.request");
const _souvenirLikesentities = require("../../../entities/souvenirLikes.entities");
const _common = require("@nestjs/common");
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
let GetAllSouvenirLikesHandlerPub = class GetAllSouvenirLikesHandlerPub {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await _souvenirLikesentities.SouvenirLikesEntity.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _souvenirLikesentities.SouvenirLikesEntity.find({
            select: {
                id: true,
                userId: true,
                souvenirId: true
            },
            take,
            skip
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallsouvenirLikesrequest.GetAllSouvenirLikesRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllSouvenirLikesHandlerPub.prototype, "execute", null);
GetAllSouvenirLikesHandlerPub = _ts_decorate([
    (0, _common.Injectable)()
], GetAllSouvenirLikesHandlerPub);

//# sourceMappingURL=get-all-souvenirLikes.handler.js.map