"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateTermsHandler", {
    enumerable: true,
    get: function() {
        return CreateTermsHandler;
    }
});
const _common = require("@nestjs/common");
const _termsentities = require("../../../entities/terms.entities");
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
let CreateTermsHandler = class CreateTermsHandler {
    async execute(payload) {
        const newTerm = _termsentities.TermsEntity.create({
            content: payload.content
        });
        return await _termsentities.TermsEntity.save(newTerm);
    }
};
CreateTermsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateTermsHandler);

//# sourceMappingURL=create-terms.handler.js.map