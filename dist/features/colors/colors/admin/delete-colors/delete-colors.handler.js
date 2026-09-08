"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteColorsHandler", {
    enumerable: true,
    get: function() {
        return DeleteColorsHandler;
    }
});
const _colorsentities = require("../../../entities/colors.entities");
const _common = require("@nestjs/common");
let DeleteColorsHandler = class DeleteColorsHandler {
    async execute(id) {
        const categories = await _colorsentities.ColorsEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Colors');
        return await _colorsentities.ColorsEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-colors.handler.js.map