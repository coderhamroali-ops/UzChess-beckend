"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateOtpCodesHandler", {
    enumerable: true,
    get: function() {
        return CreateOtpCodesHandler;
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
let CreateOtpCodesHandler = class CreateOtpCodesHandler {
    async execute(payload) {
        const newOtpCode = {
            userId: payload.userId,
            code: payload.code,
            date: payload.date,
            type: payload.type
        };
        return await _otpCodesentities.OtpCodesEntity.save(newOtpCode);
    }
};
CreateOtpCodesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateOtpCodesHandler);

//# sourceMappingURL=create-otpCodes.handler.js.map