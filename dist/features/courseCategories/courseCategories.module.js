"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CourseCategoriesModule", {
    enumerable: true,
    get: function() {
        return CourseCategoriesModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _courseCategoriesadmincontroller = require("./courseCategories/courseCategories.admin.controller");
const _createcourseCategorieshandler = require("./courseCategories/admin/create-courseCategories/create-courseCategories.handler");
const _getallcourseCategorieshandler = require("./courseCategories/admin/get-all-courseCategories/get-all-courseCategories.handler");
const _updatecourseCategorieshandler = require("./courseCategories/admin/update-courseCategories/update-courseCategories.handler");
const _deletecourseCategorieshandler = require("./courseCategories/admin/delete-courseCategories/delete-courseCategories.handler");
const _courseCategoriespubliccontroller = require("./courseCategories/public/courseCategories-public.controller");
const _getallcourseCategorieshandler1 = require("./courseCategories/public/get-all-courseCategories/get-all-courseCategories.handler");
const _courseCategoriesentities = require("./entities/courseCategories.entities");
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
let CourseCategoriesModule = class CourseCategoriesModule {
};
CourseCategoriesModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _courseCategoriesentities.CourseCategoriesEntities
            ])
        ],
        controllers: [
            _courseCategoriesadmincontroller.CourseCategoriesAdminController,
            _courseCategoriespubliccontroller.CourseCategoriesPublicController
        ],
        providers: [
            _createcourseCategorieshandler.CreateCourseCategoriesHandler,
            _getallcourseCategorieshandler.GetAllCourseCategoriesHandler,
            _updatecourseCategorieshandler.UpdateCourseCategoriesHandler,
            _deletecourseCategorieshandler.DeleteCourseCategoriesHandler,
            _getallcourseCategorieshandler1.GetAllCourseCategoriesHandlerP
        ]
    })
], CourseCategoriesModule);

//# sourceMappingURL=courseCategories.module.js.map