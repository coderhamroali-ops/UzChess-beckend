"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllBookCategoriesHandlerPup", {
    enumerable: true,
    get: function() {
        return GetAllBookCategoriesHandlerPup;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _swagger = require("@nestjs/swagger");
const _paginationfilter = require("../../../../common/pagination.filter");
const _bookcategoryentities = require("../../../entities/book-category.entities");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallbookcategoriesrequest = require("./get-all-book-categories.request");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let GetAllBookCategoriesHandlerPup = class GetAllBookCategoriesHandlerPup {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await this.bookCategoryRepository.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await this.bookCategoryRepository.find({
            select: {
                id: true,
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
    constructor(bookCategoryRepository){
        this.bookCategoryRepository = bookCategoryRepository;
    }
};
_ts_decorate([
    (0, _swagger.ApiOkResponse)({
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallbookcategoriesrequest.GetAllBookCategoriesRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllBookCategoriesHandlerPup.prototype, "execute", null);
GetAllBookCategoriesHandlerPup = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_bookcategoryentities.Entitybook)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], GetAllBookCategoriesHandlerPup);

//# sourceMappingURL=get-all-book-categories.handler.js.map