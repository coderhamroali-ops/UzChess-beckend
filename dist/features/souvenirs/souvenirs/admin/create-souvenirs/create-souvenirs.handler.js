"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateSouvenirsHandler", {
    enumerable: true,
    get: function() {
        return CreateSouvenirsHandler;
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
let CreateSouvenirsHandler = class CreateSouvenirsHandler {
    async execute(payload) {
        const titleExists = await _souvenirsentities.SouvenirsEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title)
        });
        if (titleExists) {
            throw new _common.ConflictException('Title already exists');
        }
        const newSouvenir = {
            title: payload.title,
            description: payload.description,
            price: payload.price
        };
        return await _souvenirsentities.SouvenirsEntities.save(newSouvenir);
    }
};
CreateSouvenirsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateSouvenirsHandler);

//# sourceMappingURL=create-souvenirs.handler.js.map