"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllNewsViewsHandler", {
    enumerable: true,
    get: function() {
        return GetAllNewsViewsHandler;
    }
});
const _common = require("@nestjs/common");
const _newsViewsentities = require("../../../entities/newsViews.entities");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _swagger = require("@nestjs/swagger");
const _getallNewsViewsreques = require("./get-all-NewsViews.reques");
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
let GetAllNewsViewsHandler = class GetAllNewsViewsHandler {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 10;
        const skip = (currentPage - 1) * take;
        const [data, totalCount] = await _newsViewsentities.NewsViewsEntities.findAndCount({
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallNewsViewsreques.GetAllNewsViewsReques)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _getallNewsViewsreques.GetAllNewsViewsReques === "undefined" ? Object : _getallNewsViewsreques.GetAllNewsViewsReques
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllNewsViewsHandler.prototype, "execute", null);
GetAllNewsViewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], GetAllNewsViewsHandler);

//# sourceMappingURL=get-all-NewsViews.handler.js.map