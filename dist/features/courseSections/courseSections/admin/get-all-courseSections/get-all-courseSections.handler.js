"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllCourseSectionsHandler", {
    enumerable: true,
    get: function() {
        return GetAllCourseSectionsHandler;
    }
});
const _swagger = require("@nestjs/swagger");
const _common = require("@nestjs/common");
const _paginationfilter = require("../../../../common/pagination.filter");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallcourseSectionsrequest = require("./get-all-courseSections.request");
const _courseSectionsentities = require("../../../entities/courseSections.entities");
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
let GetAllCourseSectionsHandler = class GetAllCourseSectionsHandler {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await _courseSectionsentities.CourseSectionsEntity.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _courseSectionsentities.CourseSectionsEntity.find({
            select: {
                id: true,
                courseId: true,
                title: true,
                order: true,
                date: true
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
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallcourseSectionsrequest.GetAllCourseSectionsRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllCourseSectionsHandler.prototype, "execute", null);
GetAllCourseSectionsHandler = _ts_decorate([
    (0, _common.Injectable)()
], GetAllCourseSectionsHandler);

//# sourceMappingURL=get-all-courseSections.handler.js.map