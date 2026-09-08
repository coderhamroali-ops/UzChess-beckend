"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirImagesModule", {
    enumerable: true,
    get: function() {
        return SouvenirImagesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _souvenirImagesentities = require("./entities/souvenirImages.entities");
const _souvenirImagesadmincontroller = require("./souvenirImages/admin/souvenirImages-admin.controller");
const _souvenirImagespubliccontroller = require("./souvenirImages/public/souvenirImages-public.controller");
const _createsouvenirImageshandler = require("./souvenirImages/admin/create-souvenirImages/create-souvenirImages.handler");
const _getallsouvenirImageshandler = require("./souvenirImages/admin/get-all-souvenirImages/get-all-souvenirImages.handler");
const _getallsouvenirImageshandler1 = require("./souvenirImages/public/get-all-souvenirImages/get-all-souvenirImages.handler");
const _updatesouvenirImageshandler = require("./souvenirImages/admin/update-souvenirImages/update-souvenirImages.handler");
const _deletesouvenirImageshandler = require("./souvenirImages/admin/delete-souvenirImages/delete-souvenirImages.handler");
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
let SouvenirImagesModule = class SouvenirImagesModule {
};
SouvenirImagesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _souvenirImagesentities.SouvenirImagesEntity
            ])
        ],
        controllers: [
            _souvenirImagesadmincontroller.SouvenirImagesAdminController,
            _souvenirImagespubliccontroller.SouvenirImagesPublicController
        ],
        providers: [
            _createsouvenirImageshandler.CreateSouvenirImagesHandler,
            _getallsouvenirImageshandler.GetAllSouvenirImagesHandler,
            _getallsouvenirImageshandler1.GetAllSouvenirImagesHandlerPub,
            _updatesouvenirImageshandler.UpdateSouvenirImagesHandler,
            _deletesouvenirImageshandler.DeleteSouvenirImagesHandler
        ]
    })
], SouvenirImagesModule);

//# sourceMappingURL=souvenirImages.module.js.map