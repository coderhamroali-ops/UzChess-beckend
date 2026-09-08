"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateBookLikesHandler", {
    enumerable: true,
    get: function() {
        return UpdateBookLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _bookLikesentities = require("../../../entities/bookLikes.entities");
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
let UpdateBookLikesHandler = class UpdateBookLikesHandler {
    async execute(id, payload) {
        const like = await _bookLikesentities.BookLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Book like not found');
        }
        const likeExists = await _bookLikesentities.BookLikesEntity.exists({
            where: {
                id: (0, _typeorm.Not)(like.id),
                userId: payload.userId,
                bookId: payload.bookId
            }
        });
        if (likeExists) {
            throw new _common.ConflictException('This user already liked this book');
        }
        like.userId = payload.userId;
        like.bookId = payload.bookId;
        return await _bookLikesentities.BookLikesEntity.save(like);
    }
};
UpdateBookLikesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateBookLikesHandler);

//# sourceMappingURL=update-bookLikes.handler.js.map