"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllSouvenirsHandlerPub", {
    enumerable: true,
    get: function() {
        return GetAllSouvenirsHandlerPub;
    }
});
const _swagger = require("@nestjs/swagger");
const _common = require("@nestjs/common");
const _paginationfilter = require("../../../../common/pagination.filter");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallsouvenirsrequest = require("./get-all-souvenirs.request");
const _souvenirsentities = require("../../../entities/souvenirs.entities");
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
let GetAllSouvenirsHandlerPub = class GetAllSouvenirsHandlerPub {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 10;
        const skip = (currentPage - 1) * take;
        const totalCount = await _souvenirsentities.SouvenirsEntities.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _souvenirsentities.SouvenirsEntities.find({
            select: {
                id: true,
                title: true,
                description: true,
                price: true
            },
            take,
            skip,
            order: {
                id: 'DESC'
            }
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallsouvenirsrequest.GetAllSouvenirsRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllSouvenirsHandlerPub.prototype, "execute", null);
GetAllSouvenirsHandlerPub = _ts_decorate([
    (0, _common.Injectable)()
], GetAllSouvenirsHandlerPub);

//# sourceMappingURL=get-all-souvenirs.handler.js.map