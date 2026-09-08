"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseLikesModule", {
    enumerable: true,
    get: function() {
        return CourseLikesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _courseLikesentities = require("./entities/courseLikes.entities");
const _courseLikesadmincontroller = require("./courseLikes/admin/courseLikes-admin.controller");
const _courseLikespubliccontroller = require("./courseLikes/public/courseLikes-public.controller");
const _createcourseLikeshandler = require("./courseLikes/admin/create-courseLikes/create-courseLikes.handler");
const _getallcourseLikeshandler = require("./courseLikes/admin/get-all-courseLikes/get-all-courseLikes.handler");
const _getallcourseLikeshandler1 = require("./courseLikes/public/get-all-courseLikes/get-all-courseLikes.handler");
const _updatecourseLikeshandler = require("./courseLikes/admin/update-courseLikes/update-courseLikes.handler");
const _deletecourseLikeshandler = require("./courseLikes/admin/delete-courseLikes/delete-courseLikes.handler");
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
let CourseLikesModule = class CourseLikesModule {
};
CourseLikesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _courseLikesentities.CourseLikesEntity
            ])
        ],
        controllers: [
            _courseLikesadmincontroller.CourseLikesAdminController,
            _courseLikespubliccontroller.CourseLikesPublicController
        ],
        providers: [
            _createcourseLikeshandler.CreateCourseLikesHandler,
            _getallcourseLikeshandler.GetAllCourseLikesHandler,
            _getallcourseLikeshandler1.GetAllCourseLikesHandlerPub,
            _updatecourseLikeshandler.UpdateCourseLikesHandler,
            _deletecourseLikeshandler.DeleteCourseLikesHandler
        ]
    })
], CourseLikesModule);

//# sourceMappingURL=courseLikes.module.js.map