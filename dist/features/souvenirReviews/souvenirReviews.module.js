"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SouvenirReviewsModule", {
    enumerable: true,
    get: function() {
        return SouvenirReviewsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _souvenirReviewsentities = require("./entities/souvenirReviews.entities");
const _souvenirReviewsadmincontroller = require("./souvenirReviews/admin/souvenirReviews-admin.controller");
const _createsouvenirReviewshandler = require("./souvenirReviews/admin/create-souvenirReviews/create-souvenirReviews.handler");
const _getallsouvenirReviewshandler = require("./souvenirReviews/admin/get-all-souvenirReviews/get-all-souvenirReviews.handler");
const _updatesouvenirReviewshandler = require("./souvenirReviews/admin/update-souvenirReviews/update-souvenirReviews.handler");
const _deletesouvenirReviewshandler = require("./souvenirReviews/admin/delete-souvenirReviews/delete-souvenirReviews.handler");
const _souvenirReviewspubliccontroller = require("./souvenirReviews/public/souvenirReviews.public.controller");
const _getallsouvenirReviewshandler1 = require("./souvenirReviews/public/get-all-souvenirReviews/get-all-souvenirReviews.handler");
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
let SouvenirReviewsModule = class SouvenirReviewsModule {
};
SouvenirReviewsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _souvenirReviewsentities.SouvenirReviewsEntity
            ])
        ],
        controllers: [
            _souvenirReviewsadmincontroller.SouvenirReviewsAdminController,
            _souvenirReviewspubliccontroller.SouvenirReviewsPublicController
        ],
        providers: [
            _createsouvenirReviewshandler.CreateSouvenirReviewsHandler,
            _getallsouvenirReviewshandler.GetAllSouvenirReviewsHandler,
            _updatesouvenirReviewshandler.UpdateSouvenirReviewsHandler,
            _deletesouvenirReviewshandler.DeleteSouvenirReviewsHandler,
            _getallsouvenirReviewshandler1.GetAllSouvenirReviewsHandlerPub
        ]
    })
], SouvenirReviewsModule);

//# sourceMappingURL=souvenirReviews.module.js.map