"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeletePlayersHandler", {
    enumerable: true,
    get: function() {
        return DeletePlayersHandler;
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
let DeletePlayersHandler = class DeletePlayersHandler {
    async execute(id) {
        const player = await _playersentities.PlayersEntities.findOne({
            where: {
                id
            }
        });
        if (!player) {
            throw new _common.NotFoundException('Player not found');
        }
        await _playersentities.PlayersEntities.delete(id);
        return {
            message: 'Player deleted successfully'
        };
    }
};
DeletePlayersHandler = _ts_decorate([
    (0, _common.Injectable)()
], DeletePlayersHandler);

//# sourceMappingURL=delete-players.handler.js.map