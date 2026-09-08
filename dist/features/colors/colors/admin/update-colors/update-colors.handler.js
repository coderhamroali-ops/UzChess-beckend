"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateColorsHandler", {
    enumerable: true,
    get: function() {
        return UpdateColorsHandler;
    }
});
const _common = require("@nestjs/common");
const _colorsentities = require("../../../entities/colors.entities");
const _typeorm = require("typeorm");
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
let UpdateColorsHandler = class UpdateColorsHandler {
    async execute(id, payload) {
        const category = await _colorsentities.ColorsEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('Colors category not found');
        }
        const titleExists = await _colorsentities.ColorsEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title),
                color: (0, _typeorm.ILike)(payload.color)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        category.title = payload.title;
        category.color = payload.color;
        return await _colorsentities.ColorsEntities.save(category);
    }
};
UpdateColorsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateColorsHandler);

//# sourceMappingURL=update-colors.handler.js.map