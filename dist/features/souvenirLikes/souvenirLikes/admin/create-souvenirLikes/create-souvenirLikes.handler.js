"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirLikesHandler", {
    enumerable: true,
    get: function() {
        return CreateSouvenirLikesHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateSouvenirLikesHandler = class CreateSouvenirLikesHandler {
    async execute(payload) {
        const likeExists = await _souvenirLikesentities.SouvenirLikesEntity.exists({
            where: {
                userId: payload.userId,
                souvenirId: payload.souvenirId
            }
        });
        if (likeExists) {
            throw new _common.ConflictException('User already liked this souvenir');
        }
        const newLike = _souvenirLikesentities.SouvenirLikesEntity.create({
            userId: payload.userId,
            souvenirId: payload.souvenirId
        });
        return await _souvenirLikesentities.SouvenirLikesEntity.save(newLike);
    }
};
CreateSouvenirLikesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateSouvenirLikesHandler);

//# sourceMappingURL=create-souvenirLikes.handler.js.map