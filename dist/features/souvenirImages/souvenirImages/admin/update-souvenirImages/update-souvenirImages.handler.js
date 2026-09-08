"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirImagesHandler", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirImagesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _souvenirImagesentities = require("../../../entities/souvenirImages.entities");
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
let UpdateSouvenirImagesHandler = class UpdateSouvenirImagesHandler {
    async execute(id, payload) {
        const souvenirImage = await _souvenirImagesentities.SouvenirImagesEntity.findOneBy({
            id: id
        });
        if (!souvenirImage) {
            throw new _common.NotFoundException('Souvenir image not found');
        }
        const imageExists = await _souvenirImagesentities.SouvenirImagesEntity.exists({
            where: {
                id: (0, _typeorm.Not)(souvenirImage.id),
                souvenirId: payload.souvenirId,
                image: payload.image
            }
        });
        if (imageExists) {
            throw new _common.ConflictException('Image already exists');
        }
        souvenirImage.souvenirId = payload.souvenirId;
        souvenirImage.image = payload.image;
        return await _souvenirImagesentities.SouvenirImagesEntity.save(souvenirImage);
    }
};
UpdateSouvenirImagesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateSouvenirImagesHandler);

//# sourceMappingURL=update-souvenirImages.handler.js.map