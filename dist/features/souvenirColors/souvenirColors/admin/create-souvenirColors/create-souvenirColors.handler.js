"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirColorsHandler", {
    enumerable: true,
    get: function() {
        return CreateSouvenirColorsHandler;
    }
});
const _common = require("@nestjs/common");
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
let CreateSouvenirColorsHandler = class CreateSouvenirColorsHandler {
    async execute(payload) {
        const colorExists = await _souvenirColorsentities.SouvenirColorsEntity.exists({
            where: {
                souvenirId: payload.souvenirId,
                colorId: payload.colorId
            }
        });
        if (colorExists) {
            throw new _common.ConflictException('This color already exists for this souvenir');
        }
        const newColor = _souvenirColorsentities.SouvenirColorsEntity.create({
            souvenirId: payload.souvenirId,
            colorId: payload.colorId
        });
        return await _souvenirColorsentities.SouvenirColorsEntity.save(newColor);
    }
};
CreateSouvenirColorsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateSouvenirColorsHandler);

//# sourceMappingURL=create-souvenirColors.handler.js.map