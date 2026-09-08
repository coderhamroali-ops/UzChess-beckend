"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirColorsHandler", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirColorsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _souvenirColorsentities = require("../../../entities/souvenirColors.entities");
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
let UpdateSouvenirColorsHandler = class UpdateSouvenirColorsHandler {
    async execute(id, payload) {
        const souvenirColor = await _souvenirColorsentities.SouvenirColorsEntity.findOneBy({
            id: id
        });
        if (!souvenirColor) {
            throw new _common.NotFoundException('Souvenir color not found');
        }
        const colorExists = await _souvenirColorsentities.SouvenirColorsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(souvenirColor.id),
                souvenirId: payload.souvenirId,
                colorId: payload.colorId
            }
        });
        if (colorExists) {
            throw new _common.ConflictException('This color already exists for this souvenir');
        }
        souvenirColor.souvenirId = payload.souvenirId;
        souvenirColor.colorId = payload.colorId;
        return await _souvenirColorsentities.SouvenirColorsEntity.save(souvenirColor);
    }
};
UpdateSouvenirColorsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateSouvenirColorsHandler);

//# sourceMappingURL=update-souvenirColors.handler.js.map