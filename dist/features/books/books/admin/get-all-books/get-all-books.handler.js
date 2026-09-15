"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllBooksHandler", {
    enumerable: true,
    get: function() {
        return GetAllBooksHandler;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _paginatedresultdto = require("../../../../common/dto/paginated-result.dto");
const _getallbooksrequest = require("./get-all-books.request");
const _paginationfilter = require("../../../../common/pagination.filter");
const _booksentities = require("../../../entities/books.entities");
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
let GetAllBooksHandler = class GetAllBooksHandler {
    async execute(query) {
        const currentPage = query.page ?? 1;
        const take = query.size ?? 3;
        const skip = (currentPage - 1) * take;
        const totalCount = await _booksentities.BooksEntity.count();
        const totalPages = Math.ceil(totalCount / take);
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        const data = await _booksentities.BooksEntity.find({
            select: {
                authorId: true,
                categoryId: true,
                languageId: true,
                difficultyId: true,
                title: true,
                description: true,
                image: true,
                price: true,
                newPrice: true,
                rating: true,
                reviewsCount: true,
                pages: true,
                pubDate: true
            },
            take: take,
            skip: skip
        });
        for (let news of data){
            news.image = 'http://localhost:8000' + '/' + news.image;
        }
        return {
            totalPages,
            totalCount,
            currentPage,
            data,
            hasNext,
            hasPrevious
        };
    }
};
_ts_decorate([
    (0, _swagger.ApiOkResponse)({
        type: (0, _paginatedresultdto.PaginatedResultDtoT)(_getallbooksrequest.GetAllBooksRequest)
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _paginationfilter.PaginationFilters === "undefined" ? Object : _paginationfilter.PaginationFilters
    ]),
    _ts_metadata("design:returntype", Promise)
], GetAllBooksHandler.prototype, "execute", null);
GetAllBooksHandler = _ts_decorate([
    (0, _common.Injectable)()
], GetAllBooksHandler);

//# sourceMappingURL=get-all-books.handler.js.map