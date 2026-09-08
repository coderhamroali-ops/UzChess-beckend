"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseLessonsModule", {
    enumerable: true,
    get: function() {
        return CourseLessonsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _courseLessonsentities = require("./entities/courseLessons.entities");
const _courseLessonsadmincontroller = require("./courseLessons/admin/courseLessons-admin.controller");
const _courseLessonspubliccontroller = require("./courseLessons/public/courseLessons-public.controller");
const _createcourseLessonshandler = require("./courseLessons/admin/create-courseLessons/create-courseLessons.handler");
const _getallcourseLessonshandler = require("./courseLessons/admin/get-all-courseLessons/get-all-courseLessons.handler");
const _getallcourseLessonshandler1 = require("./courseLessons/public/get-all-courseLessons/get-all-courseLessons.handler");
const _updatecourseLessonshandler = require("./courseLessons/admin/update-courseLessons/update-courseLessons.handler");
const _deletecourseLessonshandler = require("./courseLessons/admin/delete-courseLessons/delete-courseLessons.handler");
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
let CourseLessonsModule = class CourseLessonsModule {
};
CourseLessonsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _courseLessonsentities.CourseLessonsEntity
            ])
        ],
        controllers: [
            _courseLessonsadmincontroller.CourseLessonsAdminController,
            _courseLessonspubliccontroller.CourseLessonsPublicController
        ],
        providers: [
            _createcourseLessonshandler.CreateCourseLessonsHandler,
            _getallcourseLessonshandler.GetAllCourseLessonsHandler,
            _getallcourseLessonshandler1.GetAllCourseLessonsHandlerPub,
            _updatecourseLessonshandler.UpdateCourseLessonsHandler,
            _deletecourseLessonshandler.DeleteCourseLessonsHandler
        ]
    })
], CourseLessonsModule);

//# sourceMappingURL=courseLessons.module.js.map