"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteOtpCodesHandler", {
    enumerable: true,
    get: function() {
        return DeleteOtpCodesHandler;
    }
});
const _common = require("@nestjs/common");
const _otpCodesentities = require("../../../entities/otpCodes.entities");
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
let DeleteOtpCodesHandler = class DeleteOtpCodesHandler {
    async execute(id) {
        const otpCode = await _otpCodesentities.OtpCodesEntity.findOne({
            where: {
                id
            }
        });
        if (!otpCode) {
            throw new _common.NotFoundException('OTP code not found');
        }
        await _otpCodesentities.OtpCodesEntity.remove(otpCode);
        return {
            message: 'OTP code deleted successfully'
        };
    }
};
DeleteOtpCodesHandler = _ts_decorate([
    (0, _common.Injectable)()
], DeleteOtpCodesHandler);

//# sourceMappingURL=delete-otCodes.handler.js.map