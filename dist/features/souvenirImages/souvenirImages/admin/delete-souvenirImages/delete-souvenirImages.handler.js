"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteSouvenirImagesHandler", {
    enumerable: true,
    get: function() {
        return DeleteSouvenirImagesHandler;
    }
});
const _common = require("@nestjs/common");
const _souvenirImagesentities = require("../../../entities/souvenirImages.entities");
let DeleteSouvenirImagesHandler = class DeleteSouvenirImagesHandler {
    async execute(id) {
        const souvenirImage = await _souvenirImagesentities.SouvenirImagesEntity.findOneBy({
            id: id
        });
        if (!souvenirImage) {
            throw new _common.NotFoundException('Souvenir image not found');
        }
        return await _souvenirImagesentities.SouvenirImagesEntity.remove(souvenirImage);
    }
};

//# sourceMappingURL=delete-souvenirImages.handler.js.map