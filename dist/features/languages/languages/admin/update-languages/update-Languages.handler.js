"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateLanguagesHandler", {
    enumerable: true,
    get: function() {
        return UpdateLanguagesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _languagesentities = require("../../../entities/languages.entities");
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
let UpdateLanguagesHandler = class UpdateLanguagesHandler {
    async execute(id, payload) {
        const category = await _languagesentities.LanguagesEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('Book category not found');
        }
        const titleExists = await _languagesentities.LanguagesEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title),
                code: (0, _typeorm.ILike)(payload.code)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        category.title = payload.title;
        category.code = payload.code;
        return await _languagesentities.LanguagesEntities.save(category);
    }
};
UpdateLanguagesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateLanguagesHandler);

//# sourceMappingURL=update-Languages.handler.js.map