"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateMatchesHandler", {
    enumerable: true,
    get: function() {
        return CreateMatchesHandler;
    }
});
const _common = require("@nestjs/common");
const _matchesentities = require("../../../entities/matches.entities");
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
let CreateMatchesHandler = class CreateMatchesHandler {
    async execute(payload) {
        const newMatch = {
            firstPlayer: payload.firstPlayer,
            firstPlayerResult: payload.firstPlayerResult,
            secondPlayer: payload.secondPlayer,
            secondPlayerResult: payload.secondPlayerResult,
            type: payload.type,
            moves: payload.moves,
            date: payload.date,
            winner: payload.winner
        };
        return await _matchesentities.MatchesEntities.save(newMatch);
    }
};
CreateMatchesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateMatchesHandler);

//# sourceMappingURL=create-matches.hendler.js.map