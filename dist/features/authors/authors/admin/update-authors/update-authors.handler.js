"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateAuthorsHandler", {
    enumerable: true,
    get: function() {
        return UpdateAuthorsHandler;
    }
});
const _authorsentities = require("../../../entities/authors.entities");
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
let UpdateAuthorsHandler = class UpdateAuthorsHandler {
    async execute(id, payload) {
        const category = await _authorsentities.AuthorsEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('authors category not found');
        }
        const titleExists = await _authorsentities.AuthorsEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                fullName: (0, _typeorm.ILike)(payload.fullName)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('FullName');
        }
        category.fullName = payload.fullName;
        return await _authorsentities.AuthorsEntities.save(category);
    }
};

//# sourceMappingURL=update-authors.handler.js.map