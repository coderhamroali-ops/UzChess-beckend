"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateAuthorsHandler", {
    enumerable: true,
    get: function() {
        return CreateAuthorsHandler;
    }
});
const _authorsentities = require("../../../entities/authors.entities");
const _typeorm = require("typeorm");
const _common = require("@nestjs/common");
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
let CreateAuthorsHandler = class CreateAuthorsHandler {
    async execute(payload) {
        const titleExists = await _authorsentities.AuthorsEntities.existsBy({
            fullName: (0, _typeorm.ILike)(payload.fullName)
        });
        if (titleExists) throw new _common.ConflictException('Title already exists');
        const newcategories = {
            fullName: payload.fullName
        };
        return await _authorsentities.AuthorsEntities.save(newcategories);
    }
};
CreateAuthorsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateAuthorsHandler);

//# sourceMappingURL=create-authors.handler.js.map