"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirsModule", {
    enumerable: true,
    get: function() {
        return SouvenirsModule;
    }
});
const _common = require("@nestjs/common");
const _souvenirsadmincontroller = require("./souvenirs/admin/souvenirs.admin.controller");
const _createsouvenirshandler = require("./souvenirs/admin/create-souvenirs/create-souvenirs.handler");
const _getallsouvenirshandler = require("./souvenirs/admin/get-all-souvenirs/get-all-souvenirs.handler");
const _updatesouvenirshandler = require("./souvenirs/admin/update-souvenirs/update-souvenirs.handler");
const _deletesouvenirshandler = require("./souvenirs/admin/delete-souvenirs/delete-souvenirs.handler");
const _getallsouvenirshandler1 = require("./souvenirs/public/get-all-souvenirs/get-all-souvenirs.handler");
const _souvenirspubliccontroller = require("./souvenirs/public/souvenirs-public.controller");
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
let SouvenirsModule = class SouvenirsModule {
};
SouvenirsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _souvenirsadmincontroller.SouvenirsController,
            _souvenirspubliccontroller.SouvenirsPublicController
        ],
        providers: [
            _createsouvenirshandler.CreateSouvenirsHandler,
            _getallsouvenirshandler.GetAllSouvenirsHandler,
            _updatesouvenirshandler.UpdateSouvenirsHandler,
            _deletesouvenirshandler.DeleteSouvenirsHandler,
            _getallsouvenirshandler1.GetAllSouvenirsHandlerPub
        ]
    })
], SouvenirsModule);

//# sourceMappingURL=souvenirs.module.js.map