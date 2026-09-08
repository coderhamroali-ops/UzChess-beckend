"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBooksHandler", {
    enumerable: true,
    get: function() {
        return UpdateBooksHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let UpdateBooksHandler = class UpdateBooksHandler {
    async execute(id, payload) {
        const book = await this.booksRepository.findOneBy({
            id
        });
        if (!book) {
            throw new _common.NotFoundException('Book not found');
        }
        const titleExists = await this.booksRepository.exists({
            where: {
                id: (0, _typeorm1.Not)(book.id),
                title: (0, _typeorm1.ILike)(payload.title)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Book with this title already exists');
        }
        book.title = payload.title;
        return await this.booksRepository.save(book);
    }
    constructor(booksRepository){
        this.booksRepository = booksRepository;
    }
};
UpdateBooksHandler = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_booksentities.BooksEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], UpdateBooksHandler);

//# sourceMappingURL=update-books.handler.js.map