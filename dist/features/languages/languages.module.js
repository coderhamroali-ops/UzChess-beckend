"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LanguagesModule", {
    enumerable: true,
    get: function() {
        return LanguagesModule;
    }
});
const _common = require("@nestjs/common");
const _languagesadmincontroller = require("./languages/admin/languages-admin.controller");
const _createlanguageshandler = require("./languages/admin/create-languages/create-languages.handler");
const _updateLanguageshandler = require("./languages/admin/update-languages/update-Languages.handler");
const _getallLanguageshandler = require("./languages/admin/get-all-languages/get-all-Languages-handler");
const _deleteLanguageshandler = require("./languages/admin/delete-languages/delete-Languages.handler");
const _getallLanguageshandler1 = require("./languages/public/get-all-languages/get-all-Languages-handler");
const _Languagespubliccontroller = require("./languages/public/Languages-public.controller");
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
let LanguagesModule = class LanguagesModule {
};
LanguagesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _languagesadmincontroller.LanguagesAdminController,
            _Languagespubliccontroller.LanguagesPublicController
        ],
        providers: [
            _createlanguageshandler.CreateLanguagesHandler,
            _getallLanguageshandler.GetAllLanguagesHandler,
            _updateLanguageshandler.UpdateLanguagesHandler,
            _deleteLanguageshandler.DeleteLanguagesHandler,
            _getallLanguageshandler1.GetAllLanguagesHandlerpublic
        ]
    })
], LanguagesModule);

//# sourceMappingURL=languages.module.js.map