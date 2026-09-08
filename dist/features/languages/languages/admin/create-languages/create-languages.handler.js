"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateLanguagesHandler", {
    enumerable: true,
    get: function() {
        return CreateLanguagesHandler;
    }
});
const _typeorm = require("typeorm");
const _common = require("@nestjs/common");
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
let CreateLanguagesHandler = class CreateLanguagesHandler {
    async execute(payload) {
        const titleExists = await _languagesentities.LanguagesEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title),
            code: (0, _typeorm.ILike)(payload.code)
        });
        if (titleExists) throw new _common.ConflictException('Title already exists');
        const newcategories = {
            title: payload.title,
            code: payload.code
        };
        return await _languagesentities.LanguagesEntities.save(newcategories);
    }
};
CreateLanguagesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateLanguagesHandler);

//# sourceMappingURL=create-languages.handler.js.map