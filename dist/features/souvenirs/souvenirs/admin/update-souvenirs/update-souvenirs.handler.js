"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateSouvenirsHandler", {
    enumerable: true,
    get: function() {
        return UpdateSouvenirsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _souvenirsentities = require("../../../entities/souvenirs.entities");
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
let UpdateSouvenirsHandler = class UpdateSouvenirsHandler {
    async execute(id, payload) {
        const souvenir = await _souvenirsentities.SouvenirsEntities.findOneBy({
            id: id
        });
        if (!souvenir) {
            throw new _common.NotFoundException('Souvenir not found');
        }
        const titleExists = await _souvenirsentities.SouvenirsEntities.exists({
            where: {
                id: (0, _typeorm.Not)(souvenir.id),
                title: (0, _typeorm.ILike)(payload.title),
                description: (0, _typeorm.ILike)(payload.description)
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        souvenir.title = payload.title;
        souvenir.description = payload.description;
        souvenir.price = payload.price;
        return await _souvenirsentities.SouvenirsEntities.save(souvenir);
    }
};
UpdateSouvenirsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateSouvenirsHandler);

//# sourceMappingURL=update-souvenirs.handler.js.map