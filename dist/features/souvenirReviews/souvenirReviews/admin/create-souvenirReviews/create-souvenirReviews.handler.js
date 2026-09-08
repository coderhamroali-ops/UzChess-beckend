"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirReviewsHandler", {
    enumerable: true,
    get: function() {
        return CreateSouvenirReviewsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateSouvenirReviewsHandler = class CreateSouvenirReviewsHandler {
    async execute(payload) {
        const reviewExists = await _souvenirReviewsentities.SouvenirReviewsEntity.exists({
            where: {
                userId: payload.userId,
                souvenirId: payload.souvenirId
            }
        });
        if (reviewExists) {
            throw new _common.ConflictException('User already reviewed this souvenir');
        }
        const newReview = _souvenirReviewsentities.SouvenirReviewsEntity.create({
            userId: payload.userId,
            souvenirId: payload.souvenirId,
            rating: payload.rating,
            comment: payload.comment
        });
        return await _souvenirReviewsentities.SouvenirReviewsEntity.save(newReview);
    }
};
CreateSouvenirReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateSouvenirReviewsHandler);

//# sourceMappingURL=create-souvenirReviews.handler.js.map