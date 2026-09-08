"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteSouvenirColorsHandler", {
    enumerable: true,
    get: function() {
        return DeleteSouvenirColorsHandler;
    }
});
const _common = require("@nestjs/common");
const _souvenirColorsentities = require("../../../entities/souvenirColors.entities");
let DeleteSouvenirColorsHandler = class DeleteSouvenirColorsHandler {
    async execute(id) {
        const souvenirColor = await _souvenirColorsentities.SouvenirColorsEntity.findOneBy({
            id: id
        });
        if (!souvenirColor) {
            throw new _common.NotFoundException('Souvenir color not found');
        }
        return await _souvenirColorsentities.SouvenirColorsEntity.remove(souvenirColor);
    }
};

//# sourceMappingURL=delete-souvenirColors.handler.js.map