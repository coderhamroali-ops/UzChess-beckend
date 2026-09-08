"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirImagesHandler", {
    enumerable: true,
    get: function() {
        return CreateSouvenirImagesHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateSouvenirImagesHandler = class CreateSouvenirImagesHandler {
    async execute(payload) {
        const imageExists = await _souvenirImagesentities.SouvenirImagesEntity.exists({
            where: {
                souvenirId: payload.souvenirId,
                image: payload.image
            }
        });
        if (imageExists) {
            throw new _common.ConflictException('Image already exists');
        }
        const newImage = _souvenirImagesentities.SouvenirImagesEntity.create({
            souvenirId: payload.souvenirId,
            image: payload.image
        });
        return await _souvenirImagesentities.SouvenirImagesEntity.save(newImage);
    }
};
CreateSouvenirImagesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateSouvenirImagesHandler);

//# sourceMappingURL=create-souvenirImages.handler.js.map