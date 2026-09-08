"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MatchesModule", {
    enumerable: true,
    get: function() {
        return MatchesModule;
    }
});
const _common = require("@nestjs/common");
const _matchesadmincontroller = require("./matches/admin/matches-admin.controller");
const _creatematcheshendler = require("./matches/admin/create-matches/create-matches.hendler");
const _getallmatcheshandler = require("./matches/admin/get-all-matches/get-all-matches.handler");
const _updatematcheshandler = require("./matches/admin/update-matches/update-matches.handler");
const _deletehandler = require("./matches/admin/delete-matches/delete-handler");
const _matchespubliccontroller = require("./matches/public/matches-public.controller");
const _getallmatcheshandler1 = require("./matches/public/get-all-matches/get-all-matches.handler");
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
let MatchesModule = class MatchesModule {
};
MatchesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _matchesadmincontroller.MatchesAdminController,
            _matchespubliccontroller.MatchesPublicController
        ],
        providers: [
            _creatematcheshendler.CreateMatchesHandler,
            _getallmatcheshandler.GetAllMatchesHandler,
            _updatematcheshandler.UpdateMatchesHandler,
            _deletehandler.DeleteMatchesHandler,
            _getallmatcheshandler1.GetAllMatchesHandlerPublc
        ]
    })
], MatchesModule);

//# sourceMappingURL=matches.module.js.map