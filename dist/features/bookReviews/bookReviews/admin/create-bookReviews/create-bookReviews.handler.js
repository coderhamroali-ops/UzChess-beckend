"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateBookReviewsHandler", {
    enumerable: true,
    get: function() {
        return CreateBookReviewsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateBookReviewsHandler = class CreateBookReviewsHandler {
    async execute(payload) {
        const reviewExists = await _bookReviewsentities.BookReviewsEntity.exists({
            where: {
                userId: payload.userId,
                bookId: payload.bookId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('This user already reviewed this book');
        }
        const newReview = _bookReviewsentities.BookReviewsEntity.create({
            userId: payload.userId,
            bookId: payload.bookId,
            rating: payload.rating,
            comment: payload.comment
        });
        return await _bookReviewsentities.BookReviewsEntity.save(newReview);
    }
};
CreateBookReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateBookReviewsHandler);

//# sourceMappingURL=create-bookReviews.handler.js.map