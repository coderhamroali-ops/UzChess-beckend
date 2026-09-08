"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllCourseCategoriesHandlerP", {
    enumerable: true,
    get: function() {
        return GetAllCourseCategoriesHandlerP;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallcourseCategoriesrequest = require("./get-all-courseCategories.request");
const _paginationfilter = require("../../../../common/pagination.filter");
const _courseCategoriesentities = require("../../../entities/courseCategories.entities");
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
let GetAllCourseCategoriesHandlerP = class GetAllCourseCategoriesHandlerP {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await _courseCategoriesentities.CourseCategoriesEntities.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _courseCategoriesentities.CourseCategoriesEntities.find({
            select: {
                title: true
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallcourseCategoriesrequest.GetAllCourseCategoriesRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllCourseCategoriesHandlerP.prototype, "execute", null);
GetAllCourseCategoriesHandlerP = _ts_decorate([
    (0, _common.Injectable)()
], GetAllCourseCategoriesHandlerP);

//# sourceMappingURL=get-all-courseCategories.handler.js.map