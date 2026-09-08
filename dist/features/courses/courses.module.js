"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CoursesModule", {
    enumerable: true,
    get: function() {
        return CoursesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _createcourseshandler = require("./courses/admin/create-courses/create-courses.handler");
const _getallcourseshandler = require("./courses/admin/get-all-courses/get-all-courses.handler");
const _updatecourseshandler = require("./courses/admin/update-courses/update-courses.handler");
const _deletecourseshandler = require("./courses/admin/delete-courses/delete-courses.handler");
const _coursespubliccontroller = require("./courses/public/courses-public.controller");
const _getallcourseshandler1 = require("./courses/public/get-all-courses/get-all-courses.handler");
const _coursesentities = require("./entities/courses-entities");
const _coursesamincontroller = require("./courses/admin/courses-amin.controller");
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
let CoursesModule = class CoursesModule {
};
CoursesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _coursesentities.CoursesEntities
            ])
        ],
        controllers: [
            _coursesamincontroller.CoursesAdminController,
            _coursespubliccontroller.CoursesPublicController
        ],
        providers: [
            _createcourseshandler.CreateCoursesHandler,
            _getallcourseshandler.GetAllCoursesHandler,
            _updatecourseshandler.UpdateCoursesHandler,
            _deletecourseshandler.DeleteCoursesHandler,
            _getallcourseshandler1.GetAllCoursesHandlerP
        ]
    })
], CoursesModule);

//# sourceMappingURL=courses.module.js.map