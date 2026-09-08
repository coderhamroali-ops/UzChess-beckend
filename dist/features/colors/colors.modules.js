"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColorsModules", {
    enumerable: true,
    get: function() {
        return ColorsModules;
    }
});
const _common = require("@nestjs/common");
const _colorsadmincontroller = require("./colors/admin/colors-admin.controller");
const _createcolorshandler = require("./colors/admin/create-colers/create-colors.handler");
const _getallcolorshandler = require("./colors/admin/get-all-colors/get-all-colors.handler");
const _typeorm = require("@nestjs/typeorm");
const _colorsentities = require("./entities/colors.entities");
const _updatecolorshandler = require("./colors/admin/update-colors/update-colors.handler");
const _deletecolorshandler = require("./colors/admin/delete-colors/delete-colors.handler");
const _colorspubliccontroller = require("./colors/public/colors-public.controller");
const _getallcolorshandler1 = require("./colors/public/get-all-colors/get-all-colors.handler");
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
let ColorsModules = class ColorsModules {
};
ColorsModules = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _colorsentities.ColorsEntities
            ])
        ],
        controllers: [
            _colorsadmincontroller.ColorsAdminController,
            _colorspubliccontroller.ColorsPublicController
        ],
        providers: [
            _createcolorshandler.CreateColorsHandler,
            _getallcolorshandler.GetAllColorsHandler,
            _updatecolorshandler.UpdateColorsHandler,
            _deletecolorshandler.DeleteColorsHandler,
            _getallcolorshandler1.GetAllColorsHandlerP
        ]
    })
], ColorsModules);

//# sourceMappingURL=colors.modules.js.map