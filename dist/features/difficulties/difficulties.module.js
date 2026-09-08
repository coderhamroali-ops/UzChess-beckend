"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DifficultiesModule", {
    enumerable: true,
    get: function() {
        return DifficultiesModule;
    }
});
const _common = require("@nestjs/common");
const _difficultiesadmincontroller = require("./difficulties/admin/difficulties-admin.controller");
const _createdifficultieshandler = require("./difficulties/admin/create-difficulties/create-difficulties.handler");
const _getalldifficultieshandler = require("./difficulties/admin/get-all-difficulties/get-all-difficulties.handler");
const _updatedifficultieshandler = require("./difficulties/admin/update-difficulties/update-difficulties.handler");
const _deletedifficultieshandler = require("./difficulties/admin/delete-difficulties/delete-difficulties.handler");
const _getalldifficultieshandler1 = require("./difficulties/public/get-all-difficulties/get-all-difficulties.handler");
const _difficultiespubliccontroller = require("./difficulties/public/difficulties-public-controller");
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
let DifficultiesModule = class DifficultiesModule {
};
DifficultiesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _difficultiesadmincontroller.DifficultiesAdminController,
            _difficultiespubliccontroller.DifficultiesPublicController
        ],
        providers: [
            _createdifficultieshandler.CreateDifficultiesHandler,
            _getalldifficultieshandler.GetAllDifficultiesHandler,
            _updatedifficultieshandler.UpdateDifficultiesHandler,
            _deletedifficultieshandler.DeleteDifficultiesHandler,
            _getalldifficultieshandler1.GetAllDifficultiesHandlerP
        ]
    })
], DifficultiesModule);

//# sourceMappingURL=difficulties.module.js.map