"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirReviewsHandler", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirReviewsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _souvenirReviewsentities = require("../../../entities/souvenirReviews.entities");
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
let UpdateSouvenirReviewsHandler = class UpdateSouvenirReviewsHandler {
    async execute(id, payload) {
        const review = await _souvenirReviewsentities.SouvenirReviewsEntity.findOneBy({
            id: id
        });
        if (!review) {
            throw new _common.NotFoundException('Souvenir review not found');
        }
        const reviewExists = await _souvenirReviewsentities.SouvenirReviewsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(review.id),
                userId: payload.userId,
                souvenirId: payload.souvenirId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('User already reviewed this souvenir');
        }
        review.userId = payload.userId;
        review.souvenirId = payload.souvenirId;
        review.rating = payload.rating;
        review.comment = payload.comment;
        return await _souvenirReviewsentities.SouvenirReviewsEntity.save(review);
    }
};
UpdateSouvenirReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateSouvenirReviewsHandler);

//# sourceMappingURL=update-souvenirReviews.handler.js.map