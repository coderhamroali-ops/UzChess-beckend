"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseSectionsModule", {
    enumerable: true,
    get: function() {
        return CourseSectionsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _courseSectionsentities = require("./entities/courseSections.entities");
const _courseSectionsadmincontroller = require("./courseSections/admin/courseSections-admin.controller");
const _courseSectionspubliccontroller = require("./courseSections/public/courseSections.public.controller");
const _createcourseSectionshandler = require("./courseSections/admin/create-courseSections/create-courseSections.handler");
const _getallcourseSectionshandler = require("./courseSections/admin/get-all-courseSections/get-all-courseSections.handler");
const _getallcourseSectionshandler1 = require("./courseSections/public/get-all-courseSections/get-all-courseSections.handler");
const _updatecourseSectionshandler = require("./courseSections/admin/update-courseSections/update-courseSections.handler");
const _deletecourseSectionshandler = require("./courseSections/admin/delete-courseSections/delete-courseSections.handler");
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
let CourseSectionsModule = class CourseSectionsModule {
};
CourseSectionsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _courseSectionsentities.CourseSectionsEntity
            ])
        ],
        controllers: [
            _courseSectionsadmincontroller.CourseSectionsAdminController,
            _courseSectionspubliccontroller.CourseSectionsPublicController
        ],
        providers: [
            _createcourseSectionshandler.CreateCourseSectionsHandler,
            _getallcourseSectionshandler.GetAllCourseSectionsHandler,
            _getallcourseSectionshandler1.GetAllCourseSectionsHandlerPub,
            _updatecourseSectionshandler.UpdateCourseSectionsHandler,
            _deletecourseSectionshandler.DeleteCourseSectionsHandler
        ]
    })
], CourseSectionsModule);

//# sourceMappingURL=courseSections.module.js.map