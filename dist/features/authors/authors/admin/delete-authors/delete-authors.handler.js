"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteAuthorsHandler", {
    enumerable: true,
    get: function() {
        return DeleteAuthorsHandler;
    }
});
const _authorsentities = require("../../../entities/authors.entities");
const _common = require("@nestjs/common");
let DeleteAuthorsHandler = class DeleteAuthorsHandler {
    async execute(id) {
        const categories = await _authorsentities.AuthorsEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Authors');
        return await _authorsentities.AuthorsEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-authors.handler.js.map