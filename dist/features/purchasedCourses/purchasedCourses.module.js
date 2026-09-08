"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PurchasedCoursesModule", {
    enumerable: true,
    get: function() {
        return PurchasedCoursesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _purchasedCoursesentities = require("./entities/purchasedCourses.entities");
const _purchasedCoursesadmincontroller = require("./purchasedCourses/admim/purchasedCourses-admin.controller");
const _purchasedCoursespubliccontroller = require("./purchasedCourses/public/purchasedCourses-public.controller");
const _createpurchasedCourseshandler = require("./purchasedCourses/admim/create-purchasedCourses/create-purchasedCourses.handler");
const _getallpurchasedCourseshandler = require("./purchasedCourses/admim/get-all-purchasedCourses/get-all-purchasedCourses.handler");
const _getallpurchasedCourseshandler1 = require("./purchasedCourses/public/get-all-purchasedCourses/get-all-purchasedCourses.handler");
const _updatepurchasedCourseshandler = require("./purchasedCourses/admim/update-purchasedCourses/update-purchasedCourses.handler");
const _daletepurchasedCourseshandler = require("./purchasedCourses/admim/delete-purchasedCourses/dalete-purchasedCourses.handler");
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
let PurchasedCoursesModule = class PurchasedCoursesModule {
};
PurchasedCoursesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _purchasedCoursesentities.PurchasedCoursesEntity
            ])
        ],
        controllers: [
            _purchasedCoursesadmincontroller.PurchasedCoursesAdminController,
            _purchasedCoursespubliccontroller.PurchasedCoursesPublicController
        ],
        providers: [
            _createpurchasedCourseshandler.CreatePurchasedCoursesHandler,
            _getallpurchasedCourseshandler.GetAllPurchasedCoursesHandler,
            _getallpurchasedCourseshandler1.GetAllPurchasedCoursesHandlerPub,
            _updatepurchasedCourseshandler.UpdatePurchasedCoursesHandler,
            _daletepurchasedCourseshandler.DeletePurchasedCoursesHandler
        ]
    })
], PurchasedCoursesModule);

//# sourceMappingURL=purchasedCourses.module.js.map