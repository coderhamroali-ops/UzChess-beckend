"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateColorsHandler", {
    enumerable: true,
    get: function() {
        return CreateColorsHandler;
    }
});
const _colorsentities = require("../../../entities/colors.entities");
const _typeorm = require("typeorm");
const _common = require("@nestjs/common");
let CreateColorsHandler = class CreateColorsHandler {
    async execute(payload) {
        const titleExists = await _colorsentities.ColorsEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title),
            color: (0, _typeorm.ILike)(payload.color)
        });
        if (titleExists) throw new _common.ConflictException('Title already exists');
        const newcategories = {
            title: payload.title,
            color: payload.color
        };
        return await _colorsentities.ColorsEntities.save(newcategories);
    }
};

//# sourceMappingURL=create-colors.handler.js.map