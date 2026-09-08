"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateBooksHandler", {
    enumerable: true,
    get: function() {
        return CreateBooksHandler;
    }
});
const _booksentities = require("../../../entities/books.entities");
const _typeorm = require("typeorm");
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
let CreateBooksHandler = class CreateBooksHandler {
    async execute(authorId, categoryId, languageId, difficultyId, title, description, image, price, newPrice, rating, reviewsCount, pages, pubDate) {
        const titleExists = await _booksentities.BooksEntity.existsBy({
            title: (0, _typeorm.ILike)(title)
        });
        if (titleExists) {
            throw new _common.ConflictException('Book with this title already exists');
        }
        const newBook = {
            authorId,
            categoryId,
            languageId,
            difficultyId,
            title,
            description,
            image: image?.path,
            price,
            newPrice,
            rating,
            reviewsCount: reviewsCount ?? 0,
            pages,
            pubDate
        };
        return await _booksentities.BooksEntity.save(newBook);
    }
};
CreateBooksHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateBooksHandler);

//# sourceMappingURL=create-books.handler.js.map