"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteBooksHandler", {
    enumerable: true,
    get: function() {
        return DeleteBooksHandler;
    }
});
const _booksentities = require("../../../entities/books.entities");
const _common = require("@nestjs/common");
let DeleteBooksHandler = class DeleteBooksHandler {
    async execute(id) {
        const categories = await _booksentities.BooksEntity.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _booksentities.BooksEntity.remove(categories);
    }
};

//# sourceMappingURL=delete-books.handler.js.map