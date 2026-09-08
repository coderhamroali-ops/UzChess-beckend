"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteBookReviewsHandler", {
    enumerable: true,
    get: function() {
        return DeleteBookReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _bookReviewsentities = require("../../../entities/bookReviews.entities");
let DeleteBookReviewsHandler = class DeleteBookReviewsHandler {
    async execute(id) {
        const review = await _bookReviewsentities.BookReviewsEntity.findOneBy({
            id
        });
        if (!review) {
            throw new _common.NotFoundException('Book review not found');
        }
        return await _bookReviewsentities.BookReviewsEntity.remove(review);
    }
};

//# sourceMappingURL=delete-bookReviews.handler.js.map