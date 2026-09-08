"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteNewsViewsHandler", {
    enumerable: true,
    get: function() {
        return DeleteNewsViewsHandler;
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
let DeleteNewsViewsHandler = class DeleteNewsViewsHandler {
    async execute(id) {
        const newsView = await _newsViewsentities.NewsViewsEntities.findOne({
            where: {
                id
            }
        });
        if (!newsView) {
            throw new _common.NotFoundException('News view not found');
        }
        await _newsViewsentities.NewsViewsEntities.remove(newsView);
        return {
            message: 'News view deleted successfully'
        };
    }
};
DeleteNewsViewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], DeleteNewsViewsHandler);

//# sourceMappingURL=delete-NewsViews.handler.js.map