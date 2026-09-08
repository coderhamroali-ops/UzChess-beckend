"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteBookCategoriesHandler", {
    enumerable: true,
    get: function() {
        return DeleteBookCategoriesHandler;
    }
});
const _bookcategoryentities = require("../../../entities/book-category.entities");
const _common = require("@nestjs/common");
let DeleteBookCategoriesHandler = class DeleteBookCategoriesHandler {
    async execute(id) {
        const categories = await _bookcategoryentities.Entitybook.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _bookcategoryentities.Entitybook.remove(categories);
    }
};

//# sourceMappingURL=delete-book-categories.handler.js.map