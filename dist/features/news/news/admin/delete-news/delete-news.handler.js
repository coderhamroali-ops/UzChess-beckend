"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteNewsHandler", {
    enumerable: true,
    get: function() {
        return DeleteNewsHandler;
    }
});
const _common = require("@nestjs/common");
const _newsentities = require("../../../entities/news.entities");
let DeleteNewsHandler = class DeleteNewsHandler {
    async execute(id) {
        const categories = await _newsentities.NewsEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _newsentities.NewsEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-news.handler.js.map