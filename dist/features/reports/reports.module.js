"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReportsModule", {
    enumerable: true,
    get: function() {
        return ReportsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _reportsentities = require("./entities/reports.entities");
const _reportsadmincontroller = require("./reports/admin/reports-admin.controller");
const _reportspubliccontroller = require("./reports/public/reports-public.controller");
const _createreportshandler = require("./reports/admin/create-reports/create-reports.handler");
const _getallreportshandler = require("./reports/admin/get-all-reports/get-all-reports.handler");
const _getallreportshandler1 = require("./reports/public/get-all-reports/get-all-reports.handler");
const _updatereportshandler = require("./reports/admin/update-reports/update-reports.handler");
const _deletereportshandler = require("./reports/admin/delete-reports/delete-reports.handler");
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
let ReportsModule = class ReportsModule {
};
ReportsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _reportsentities.ReportsEntity
            ])
        ],
        controllers: [
            _reportsadmincontroller.ReportsAdminController,
            _reportspubliccontroller.ReportsPublicController
        ],
        providers: [
            _createreportshandler.CreateReportsHandler,
            _getallreportshandler.GetAllReportsHandler,
            _getallreportshandler1.GetAllReportsHandlerPub,
            _updatereportshandler.UpdateReportsHandler,
            _deletereportshandler.DeleteReportsHandler
        ]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map