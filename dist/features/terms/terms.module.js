"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TermsModule", {
    enumerable: true,
    get: function() {
        return TermsModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _termsentities = require("./entities/terms.entities");
const _termsadmincontroller = require("./terms/admin/terms-admin.controller");
const _termspubliccontroller = require("./terms/public/terms-public.controller");
const _createtermshandler = require("./terms/admin/create-terms/create-terms.handler");
const _getalltermshandler = require("./terms/admin/get-all-terms/get-all-terms.handler");
const _getalltermshandler1 = require("./terms/public/get-all-terms/get-all-terms.handler");
const _updatetermshandler = require("./terms/admin/update-terms/update-terms.handler");
const _deletetermshandler = require("./terms/admin/delete-terms/delete-terms.handler");
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
let TermsModule = class TermsModule {
};
TermsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _termsentities.TermsEntity
            ])
        ],
        controllers: [
            _termsadmincontroller.TermsAdminController,
            _termspubliccontroller.TermsPublicController
        ],
        providers: [
            _createtermshandler.CreateTermsHandler,
            _getalltermshandler.GetAllTermsHandler,
            _getalltermshandler1.GetAllTermsHandlerPub,
            _updatetermshandler.UpdateTermsHandler,
            _deletetermshandler.DeleteTermsHandler
        ]
    })
], TermsModule);

//# sourceMappingURL=terms.module.js.map