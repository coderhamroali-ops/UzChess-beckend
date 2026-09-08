"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBookReviewsHandler", {
    enumerable: true,
    get: function() {
        return UpdateBookReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _bookReviewsentities = require("../../../entities/bookReviews.entities");
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
let UpdateBookReviewsHandler = class UpdateBookReviewsHandler {
    async execute(id, payload) {
        const review = await _bookReviewsentities.BookReviewsEntity.findOneBy({
            id
        });
        if (!review) {
            throw new _common.NotFoundException('Book review not found');
        }
        const reviewExists = await _bookReviewsentities.BookReviewsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(review.id),
                userId: payload.userId,
                bookId: payload.bookId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('This user already reviewed this book');
        }
        review.userId = payload.userId;
        review.bookId = payload.bookId;
        review.rating = payload.rating;
        review.comment = payload.comment;
        return await _bookReviewsentities.BookReviewsEntity.save(review);
    }
};
UpdateBookReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateBookReviewsHandler);

//# sourceMappingURL=update-bookReviews.handler.js.map