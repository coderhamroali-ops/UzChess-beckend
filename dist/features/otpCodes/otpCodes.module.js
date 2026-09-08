"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OtpCodesModule", {
    enumerable: true,
    get: function() {
        return OtpCodesModule;
    }
});
const _common = require("@nestjs/common");
const _adminotpCodescontroller = require("./otpCodes/admin/admin-otpCodes.controller");
const _createotpCodeshandler = require("./otpCodes/admin/create-otpCodes/create-otpCodes.handler");
const _getallOtpCodeshandler = require("./otpCodes/admin/get-all-otpCodes/get-all-OtpCodes.handler");
const _updateOtpCodeshandler = require("./otpCodes/admin/update-otpCodes/update-OtpCodes.handler");
const _deleteotCodeshandler = require("./otpCodes/admin/delete-otpCodes/delete-otCodes.handler");
const _getallotpCodespubliccontroller = require("./otpCodes/public/get-all-otpCodes-public.controller");
const _getallOtpCodeshandler1 = require("./otpCodes/public/get-all-otpCodes/get-all-OtpCodes.handler");
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
let OtpCodesModule = class OtpCodesModule {
};
OtpCodesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _adminotpCodescontroller.OtpCodesAdminController,
            _getallotpCodespubliccontroller.OtpCodesPublicController
        ],
        providers: [
            _createotpCodeshandler.CreateOtpCodesHandler,
            _getallOtpCodeshandler.GetAllOtpCodesHandler,
            _updateOtpCodeshandler.UpdateOtpCodesHandler,
            _deleteotCodeshandler.DeleteOtpCodesHandler,
            _getallOtpCodeshandler1.GetAllOtpCodesHandlerpub
        ]
    })
], OtpCodesModule);

//# sourceMappingURL=otpCodes.module.js.map