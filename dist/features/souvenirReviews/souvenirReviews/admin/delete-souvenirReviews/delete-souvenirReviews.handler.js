"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteSouvenirReviewsHandler", {
    enumerable: true,
    get: function() {
        return DeleteSouvenirReviewsHandler;
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
let DeleteSouvenirReviewsHandler = class DeleteSouvenirReviewsHandler {
    async execute(id) {
        const review = await _souvenirReviewsentities.SouvenirReviewsEntity.findOneBy({
            id: id
        });
        if (!review) {
            throw new _common.NotFoundException('Souvenir review not found');
        }
        return await _souvenirReviewsentities.SouvenirReviewsEntity.remove(review);
    }
};
DeleteSouvenirReviewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], DeleteSouvenirReviewsHandler);

//# sourceMappingURL=delete-souvenirReviews.handler.js.map