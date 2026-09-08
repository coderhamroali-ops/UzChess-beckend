"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateNewsViewsHandler", {
    enumerable: true,
    get: function() {
        return CreateNewsViewsHandler;
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
let CreateNewsViewsHandler = class CreateNewsViewsHandler {
    async execute(payload) {
        const now = new Date();
        const newNewsView = {
            userId: payload.userId,
            newsId: payload.newsId,
            firstDate: now,
            lastDate: now,
            count: 1
        };
        return await _newsViewsentities.NewsViewsEntities.save(newNewsView);
    }
};
CreateNewsViewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateNewsViewsHandler);

//# sourceMappingURL=create-newsViews.handler.js.map