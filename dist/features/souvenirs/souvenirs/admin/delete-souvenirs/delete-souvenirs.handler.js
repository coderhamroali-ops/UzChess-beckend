"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteSouvenirsHandler", {
    enumerable: true,
    get: function() {
        return DeleteSouvenirsHandler;
    }
});
const _common = require("@nestjs/common");
const _souvenirsentities = require("../../../entities/souvenirs.entities");
let DeleteSouvenirsHandler = class DeleteSouvenirsHandler {
    async execute(id) {
        const souvenir = await _souvenirsentities.SouvenirsEntities.findOneBy({
            id: id
        });
        if (!souvenir) {
            throw new _common.NotFoundException('Souvenir not found');
        }
        return await _souvenirsentities.SouvenirsEntities.remove(souvenir);
    }
};

//# sourceMappingURL=delete-souvenirs.handler.js.map