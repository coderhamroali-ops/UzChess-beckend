"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteBookLikesHandler", {
    enumerable: true,
    get: function() {
        return DeleteBookLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _bookLikesentities = require("../../../entities/bookLikes.entities");
let DeleteBookLikesHandler = class DeleteBookLikesHandler {
    async execute(id) {
        const like = await _bookLikesentities.BookLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Book like not found');
        }
        return await _bookLikesentities.BookLikesEntity.remove(like);
    }
};

//# sourceMappingURL=delete-bookLikes.handler.js.map