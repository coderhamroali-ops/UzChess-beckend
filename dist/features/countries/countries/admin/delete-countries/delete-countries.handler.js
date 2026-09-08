"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteCountriesHandler", {
    enumerable: true,
    get: function() {
        return DeleteCountriesHandler;
    }
});
const _common = require("@nestjs/common");
const _countriesentities = require("../../../entities/countries.entities");
let DeleteCountriesHandler = class DeleteCountriesHandler {
    async execute(id) {
        const categories = await _countriesentities.CountriesEntities.findOneBy({
            id: id
        });
        if (!categories) throw new _common.NotFoundException('Language');
        return await _countriesentities.CountriesEntities.remove(categories);
    }
};

//# sourceMappingURL=delete-countries.handler.js.map