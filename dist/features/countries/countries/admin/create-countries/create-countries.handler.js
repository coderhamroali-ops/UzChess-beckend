"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateCountriesHandler", {
    enumerable: true,
    get: function() {
        return CreateCountriesHandler;
    }
});
const _countriesentities = require("../../../entities/countries.entities");
const _typeorm = require("typeorm");
const _common = require("@nestjs/common");
let CreateCountriesHandler = class CreateCountriesHandler {
    async execute(payload) {
        const titleExists = await _countriesentities.CountriesEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title),
            flag: (0, _typeorm.ILike)(payload.flag)
        });
        if (titleExists) throw new _common.ConflictException('Title already exists');
        const newcountries = {
            title: payload.title,
            flag: payload.flag
        };
        return await _countriesentities.CountriesEntities.save(newcountries);
    }
};

//# sourceMappingURL=create-countries.handler.js.map