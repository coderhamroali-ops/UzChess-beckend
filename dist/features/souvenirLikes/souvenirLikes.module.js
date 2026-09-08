"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirLikesModule", {
    enumerable: true,
    get: function() {
        return SouvenirLikesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _souvenirLikesentities = require("./entities/souvenirLikes.entities");
const _souvenirLikesadmincontroller = require("./souvenirLikes/admin/souvenirLikes-admin-controller");
const _souvenirLikespubliccontroller = require("./souvenirLikes/public/souvenirLikes-public.controller");
const _createsouvenirLikeshandler = require("./souvenirLikes/admin/create-souvenirLikes/create-souvenirLikes.handler");
const _getallsouvenirLikeshandler = require("./souvenirLikes/admin/get-all-souvenirLikes/get-all-souvenirLikes.handler");
const _updatesouvenirLikeshandler = require("./souvenirLikes/admin/update-souvenirLikes/update-souvenirLikes.handler");
const _deletesouvenirLikeshandler = require("./souvenirLikes/admin/delete-souvenirLikes/delete-souvenirLikes.handler");
const _getallsouvenirLikeshandler1 = require("./souvenirLikes/public/get-all-souvenirLikes/get-all-souvenirLikes.handler");
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
let SouvenirLikesModule = class SouvenirLikesModule {
};
SouvenirLikesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _souvenirLikesentities.SouvenirLikesEntity
            ])
        ],
        controllers: [
            _souvenirLikesadmincontroller.SouvenirLikesAdminController,
            _souvenirLikespubliccontroller.SouvenirLikesPublicController
        ],
        providers: [
            _createsouvenirLikeshandler.CreateSouvenirLikesHandler,
            _getallsouvenirLikeshandler.GetAllSouvenirLikesHandler,
            _updatesouvenirLikeshandler.UpdateSouvenirLikesHandler,
            _deletesouvenirLikeshandler.DeleteSouvenirLikesHandler,
            _getallsouvenirLikeshandler1.GetAllSouvenirLikesHandlerPub
        ]
    })
], SouvenirLikesModule);

//# sourceMappingURL=souvenirLikes.module.js.map