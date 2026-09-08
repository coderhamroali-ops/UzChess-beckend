"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteMatchesHandler", {
    enumerable: true,
    get: function() {
        return DeleteMatchesHandler;
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
let DeleteMatchesHandler = class DeleteMatchesHandler {
    async execute(id) {
        const match = await _matchesentities.MatchesEntities.findOne({
            where: {
                id
            }
        });
        if (!match) {
            throw new _common.NotFoundException('Match not found');
        }
        await _matchesentities.MatchesEntities.remove(match);
        return {
            message: 'Match deleted successfully'
        };
    }
};
DeleteMatchesHandler = _ts_decorate([
    (0, _common.Injectable)()
], DeleteMatchesHandler);

//# sourceMappingURL=delete-handler.js.map