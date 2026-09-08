"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdatePlayersHandler", {
    enumerable: true,
    get: function() {
        return UpdatePlayersHandler;
    }
});
const _common = require("@nestjs/common");
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
let UpdatePlayersHandler = class UpdatePlayersHandler {
    async execute(id, payload) {
        const player = await _playersentities.PlayersEntities.findOne({
            where: {
                id
            }
        });
        if (!player) {
            throw new _common.NotFoundException('Player not found');
        }
        player.countryId = payload.countryId;
        player.fulName = payload.fulName;
        player.image = payload.image;
        player.classic = payload.classic;
        player.rapid = payload.rapid;
        player.blitz = payload.blitz;
        return await player.save();
    }
};
UpdatePlayersHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdatePlayersHandler);

//# sourceMappingURL=update-players.handler.js.map