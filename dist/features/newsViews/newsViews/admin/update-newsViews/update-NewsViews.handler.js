"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateNewsViewsHandler", {
    enumerable: true,
    get: function() {
        return UpdateNewsViewsHandler;
    }
});
const _common = require("@nestjs/common");
const _newsViewsentities = require("../../../entities/newsViews.entities");
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
let UpdateNewsViewsHandler = class UpdateNewsViewsHandler {
    async execute(id, payload) {
        const newsView = await _newsViewsentities.NewsViewsEntities.findOne({
            where: {
                id
            }
        });
        if (!newsView) {
            throw new _common.NotFoundException('News view not found');
        }
        Object.assign(newsView, payload);
        return await _newsViewsentities.NewsViewsEntities.save(newsView);
    }
};
UpdateNewsViewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateNewsViewsHandler);

//# sourceMappingURL=update-NewsViews.handler.js.map