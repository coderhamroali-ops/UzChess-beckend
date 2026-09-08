"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateCountriesHandler", {
    enumerable: true,
    get: function() {
        return UpdateCountriesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _colorsentities = require("../../../../colors/entities/colors.entities");
const _countriesentities = require("../../../entities/countries.entities");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let UpdateCountriesHandler = class UpdateCountriesHandler {
    async execute(id, payload) {
        const category = await _colorsentities.ColorsEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('counties category not found');
        }
        const titleExists = await _countriesentities.CountriesEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title),
                flag: (0, _typeorm.ILike)(payload.flag)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        category.title = payload.title;
        return await _countriesentities.CountriesEntities.save(category);
    }
};
UpdateCountriesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateCountriesHandler);

//# sourceMappingURL=update-countries.handler.js.map