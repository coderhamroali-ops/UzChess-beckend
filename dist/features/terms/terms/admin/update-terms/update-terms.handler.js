"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateTermsHandler", {
    enumerable: true,
    get: function() {
        return UpdateTermsHandler;
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
let UpdateTermsHandler = class UpdateTermsHandler {
    async execute(id, payload) {
        const term = await _termsentities.TermsEntity.findOneBy({
            id
        });
        if (!term) {
            throw new _common.NotFoundException('Term not found');
        }
        term.content = payload.content;
        return await _termsentities.TermsEntity.save(term);
    }
};
UpdateTermsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateTermsHandler);

//# sourceMappingURL=update-terms.handler.js.map