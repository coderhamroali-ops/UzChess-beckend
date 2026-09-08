"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateDifficultiesHandler", {
    enumerable: true,
    get: function() {
        return CreateDifficultiesHandler;
    }
});
const _difficultiesentities = require("../../../entities/difficulties.entities");
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
let CreateDifficultiesHandler = class CreateDifficultiesHandler {
    async execute(payload) {
        const titleExists = await _difficultiesentities.DifficultiesEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title),
            icon: (0, _typeorm.ILike)(payload.icon)
        });
        if (titleExists) throw new _common.ConflictException('Title already exist');
        const newdifi = {
            title: payload.title,
            icon: payload.icon
        };
        return await _difficultiesentities.DifficultiesEntities.save(newdifi);
    }
};
CreateDifficultiesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateDifficultiesHandler);

//# sourceMappingURL=create-difficulties.handler.js.map