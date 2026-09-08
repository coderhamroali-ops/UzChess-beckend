"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteDifficultiesHandler", {
    enumerable: true,
    get: function() {
        return DeleteDifficultiesHandler;
    }
});
const _common = require("@nestjs/common");
const _difficultiesentities = require("../../../entities/difficulties.entities");
let DeleteDifficultiesHandler = class DeleteDifficultiesHandler {
    async execute(id) {
        const categories = await _difficultiesentities.DifficultiesEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _difficultiesentities.DifficultiesEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-difficulties.handler.js.map