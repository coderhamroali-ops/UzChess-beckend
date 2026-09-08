"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportCategoriesModule", {
    enumerable: true,
    get: function() {
        return ReportCategoriesModule;
    }
});
const _common = require("@nestjs/common");
const _reportCategoriesadmincontroller = require("./reportCategories/admin/reportCategories.admin.controller");
const _reportCategoriespubliccontroller = require("./reportCategories/public/reportCategories-public.controller");
const _createreportCategorieshandler = require("./reportCategories/admin/create-reportCategories/create-reportCategories.handler");
const _getallreportCategorieshandler = require("./reportCategories/admin/get-all-reportCategories/get-all-reportCategories.handler");
const _updatereportCategorieshandler = require("./reportCategories/admin/update-reportCategories/update-reportCategories.handler");
const _deletereportCategorieshandler = require("./reportCategories/admin/delete-reportCategories/delete- reportCategories.handler");
const _getallreportCategorieshandler1 = require("./reportCategories/public/get-all-reportCategories/get-all-reportCategories.handler");
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
let ReportCategoriesModule = class ReportCategoriesModule {
};
ReportCategoriesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _reportCategoriesadmincontroller.ReportCategoriesAdminController,
            _reportCategoriespubliccontroller.ReportCategoriesPublicController
        ],
        providers: [
            _createreportCategorieshandler.CreateReportCategoriesHandler,
            _getallreportCategorieshandler.GetAllReportCategoriesHandler,
            _updatereportCategorieshandler.UpdateReportCategoriesHandler,
            _deletereportCategorieshandler.DeleteReportCategoriesHandler,
            _getallreportCategorieshandler1.GetAllReportCategoriesHandlerPub
        ]
    })
], ReportCategoriesModule);

//# sourceMappingURL=reportCategories.module.js.map