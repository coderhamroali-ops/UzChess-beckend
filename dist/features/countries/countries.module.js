"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CountriesModule", {
    enumerable: true,
    get: function() {
        return CountriesModule;
    }
});
const _common = require("@nestjs/common");
const _createcountrieshandler = require("./countries/admin/create-countries/create-countries.handler");
const _countriesadmincontroller = require("./countries/admin/countries-admin.controller");
const _getallcountrieshandler = require("./countries/admin/get-all-countries/get-all-countries.handler");
const _updatecountrieshandler = require("./countries/admin/update-countries/update-countries.handler");
const _deletecountrieshandler = require("./countries/admin/delete-countries/delete-countries.handler");
const _getallcountrieshandler1 = require("./countries/public/get-all-countries/get-all-countries.handler");
const _contriespubliccontroller = require("./countries/public/contries-public.controller");
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
let CountriesModule = class CountriesModule {
};
CountriesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _countriesadmincontroller.CountriesAdminController,
            _contriespubliccontroller.ContriesPublicController
        ],
        providers: [
            _createcountrieshandler.CreateCountriesHandler,
            _getallcountrieshandler.GetAllCountriesHandler,
            _updatecountrieshandler.UpdateCountriesHandler,
            _deletecountrieshandler.DeleteCountriesHandler,
            _getallcountrieshandler1.GetAllCountriesHandlerP
        ]
    })
], CountriesModule);

//# sourceMappingURL=countries.module.js.map