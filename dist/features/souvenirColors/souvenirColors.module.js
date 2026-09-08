"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirColorsModule", {
    enumerable: true,
    get: function() {
        return SouvenirColorsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _souvenirColorsentities = require("./entities/souvenirColors.entities");
const _souvenirColorsadmincontroller = require("./souvenirColors/admin/souvenirColors.admin.controller");
const _souvenirColorspubliccontroller = require("./souvenirColors/public/souvenirColors.public.controller");
const _createsouvenirColorshandler = require("./souvenirColors/admin/create-souvenirColors/create-souvenirColors.handler");
const _getallsouvenirColorshandlet = require("./souvenirColors/admin/get-all-souvenirColors/get-all-souvenirColors.handlet");
const _getallsouvenirColorshandlet1 = require("./souvenirColors/public/get-all-souvenirColors/get-all-souvenirColors.handlet");
const _updatesouvenirColorshandler = require("./souvenirColors/admin/update-souvenirColors/update-souvenirColors.handler");
const _deletesouvenirColorshandler = require("./souvenirColors/admin/delete-souvenirColors/delete-souvenirColors.handler");
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
let SouvenirColorsModule = class SouvenirColorsModule {
};
SouvenirColorsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _souvenirColorsentities.SouvenirColorsEntity
            ])
        ],
        controllers: [
            _souvenirColorsadmincontroller.SouvenirColorsAdminController,
            _souvenirColorspubliccontroller.SouvenirColorsPublicController
        ],
        providers: [
            _createsouvenirColorshandler.CreateSouvenirColorsHandler,
            _getallsouvenirColorshandlet.GetAllSouvenirColorsHandler,
            _getallsouvenirColorshandlet1.GetAllSouvenirColorsHandlerPub,
            _updatesouvenirColorshandler.UpdateSouvenirColorsHandler,
            _deletesouvenirColorshandler.DeleteSouvenirColorsHandler
        ]
    })
], SouvenirColorsModule);

//# sourceMappingURL=souvenirColors.module.js.map