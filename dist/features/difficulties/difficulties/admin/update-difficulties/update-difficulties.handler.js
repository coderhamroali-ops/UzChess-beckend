"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateDifficultiesHandler", {
    enumerable: true,
    get: function() {
        return UpdateDifficultiesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _difficultiesentities = require("../../../entities/difficulties.entities");
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
let UpdateDifficultiesHandler = class UpdateDifficultiesHandler {
    async execute(id, payload) {
        const category = await _difficultiesentities.DifficultiesEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('Book category not found');
        }
        const titleExists = await _difficultiesentities.DifficultiesEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title)
            }
        });
        const titleExistsi = await _difficultiesentities.DifficultiesEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                icon: (0, _typeorm.ILike)(payload.icon)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        if (titleExistsi) {
            throw new _common.ConflictException('icon');
        }
        category.title = payload.title;
        category.icon = payload.icon;
        return await _difficultiesentities.DifficultiesEntities.save(category);
    }
};
UpdateDifficultiesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateDifficultiesHandler);

//# sourceMappingURL=update-difficulties.handler.js.map