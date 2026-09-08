"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteLanguagesHandler", {
    enumerable: true,
    get: function() {
        return DeleteLanguagesHandler;
    }
});
const _common = require("@nestjs/common");
const _languagesentities = require("../../../entities/languages.entities");
let DeleteLanguagesHandler = class DeleteLanguagesHandler {
    async execute(id) {
        const categories = await _languagesentities.LanguagesEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _languagesentities.LanguagesEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-Languages.handler.js.map