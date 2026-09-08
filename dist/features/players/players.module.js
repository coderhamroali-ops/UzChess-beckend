"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PlayersModule", {
    enumerable: true,
    get: function() {
        return PlayersModule;
    }
});
const _common = require("@nestjs/common");
const _playerspubliccontroller = require("./players/public/players-public-controller");
const _playersadmincontroller = require("./players/admin/players.admin.controller");
const _createplayershandler = require("./players/admin/create-players/create-players.handler");
const _getallplayershandler = require("./players/admin/get-all-players/get-all-players.handler");
const _updateplayershandler = require("./players/admin/update-players/update-players.handler");
const _deleteplayershandler = require("./players/admin/delete-players/delete-players.handler");
const _getallplayershandler1 = require("./players/public/get-all-players/get-all-players.handler");
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
let PlayersModule = class PlayersModule {
};
PlayersModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _playersadmincontroller.PlayersAdminController,
            _playerspubliccontroller.PlayersPublicController
        ],
        providers: [
            _createplayershandler.CreatePlayersHandler,
            _getallplayershandler.GetAllPlayersHandler,
            _updateplayershandler.UpdatePlayersHandler,
            _deleteplayershandler.DeletePlayersHandler,
            _getallplayershandler1.GetAllPlayersHandlerPub
        ]
    })
], PlayersModule);

//# sourceMappingURL=players.module.js.map