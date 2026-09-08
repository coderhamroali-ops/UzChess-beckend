"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirLikesHandler", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirLikesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _souvenirLikesentities = require("../../../entities/souvenirLikes.entities");
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
let UpdateSouvenirLikesHandler = class UpdateSouvenirLikesHandler {
    async execute(id, payload) {
        const like = await _souvenirLikesentities.SouvenirLikesEntity.findOneBy({
            id
        });
        if (!like) {
            throw new _common.NotFoundException('Souvenir like not found');
        }
        const likeExists = await _souvenirLikesentities.SouvenirLikesEntity.exists({
            where: {
                id: (0, _typeorm.Not)(like.id),
                userId: payload.userId,
                souvenirId: payload.souvenirId
            }
        });
        if (likeExists) {
            throw new _common.ConflictException('This user already liked this souvenir');
        }
        like.userId = payload.userId;
        like.souvenirId = payload.souvenirId;
        return await _souvenirLikesentities.SouvenirLikesEntity.save(like);
    }
};
UpdateSouvenirLikesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateSouvenirLikesHandler);

//# sourceMappingURL=update-souvenirLikes.handler.js.map