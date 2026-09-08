"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreatePlayersHandler", {
    enumerable: true,
    get: function() {
        return CreatePlayersHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _playersentities = require("../../../entities/players.entities");
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
let CreatePlayersHandler = class CreatePlayersHandler {
    async execute(payload) {
        const playerExists = await _playersentities.PlayersEntities.existsBy({
            fulName: (0, _typeorm.ILike)(payload.fulName)
        });
        if (playerExists) {
            throw new _common.ConflictException('Player already exists');
        }
        const player = _playersentities.PlayersEntities.create({
            countryId: payload.countryId,
            fulName: payload.fulName,
            image: payload.image,
            classic: payload.classic,
            rapid: payload.rapid,
            blitz: payload.blitz
        });
        return await player.save();
    }
};
CreatePlayersHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreatePlayersHandler);

//# sourceMappingURL=create-players.handler.js.map