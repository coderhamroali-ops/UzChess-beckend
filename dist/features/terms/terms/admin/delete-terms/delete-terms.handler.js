"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteTermsHandler", {
    enumerable: true,
    get: function() {
        return DeleteTermsHandler;
    }
});
const _common = require("@nestjs/common");
const _termsentities = require("../../../entities/terms.entities");
let DeleteTermsHandler = class DeleteTermsHandler {
    async execute(id) {
        const term = await _termsentities.TermsEntity.findOneBy({
            id
        });
        if (!term) {
            throw new _common.NotFoundException('Term not found');
        }
        return await _termsentities.TermsEntity.remove(term);
    }
};

//# sourceMappingURL=delete-terms.handler.js.map