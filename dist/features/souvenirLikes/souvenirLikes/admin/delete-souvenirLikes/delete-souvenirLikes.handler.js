"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteSouvenirLikesHandler", {
    enumerable: true,
    get: function() {
        return DeleteSouvenirLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _souvenirLikesentities = require("../../../entities/souvenirLikes.entities");
let DeleteSouvenirLikesHandler = class DeleteSouvenirLikesHandler {
    async execute(id) {
        const like = await _souvenirLikesentities.SouvenirLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Souvenir like not found');
        }
        return await _souvenirLikesentities.SouvenirLikesEntity.remove(like);
    }
};

//# sourceMappingURL=delete-souvenirLikes.handler.js.map