"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetAllPlayersHandlerPub", {
    enumerable: true,
    get: function() {
        return GetAllPlayersHandlerPub;
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
let GetAllPlayersHandlerPub = class GetAllPlayersHandlerPub {
    async execute(filters) {
        return await _playersentities.PlayersEntities.find({
            select: {
                id: true,
                countryId: true,
                fulName: true,
                image: true,
                classic: true,
                rapid: true,
                blitz: true
            }
        });
    }
};
GetAllPlayersHandlerPub = _ts_decorate([
    (0, _common.Injectable)()
], GetAllPlayersHandlerPub);

//# sourceMappingURL=get-all-players.handler.js.map