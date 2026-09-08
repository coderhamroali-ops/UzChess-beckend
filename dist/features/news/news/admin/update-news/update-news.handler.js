"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateNewsHandler", {
    enumerable: true,
    get: function() {
        return UpdateNewsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _newsentities = require("../../../entities/news.entities");
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
let UpdateNewsHandler = class UpdateNewsHandler {
    async execute(id, payload) {
        const category = await _newsentities.NewsEntities.findOneBy({
            id: id
        });
        if (!category) {
            throw new _common.NotFoundException('Book category not found');
        }
        const titleExists = await _newsentities.NewsEntities.exists({
            where: {
                id: (0, _typeorm.Not)(category.id),
                title: (0, _typeorm.ILike)(payload.title),
                content: (0, _typeorm.ILike)(payload.content),
                image: payload.image,
                date: payload.date
            }
        });
        if (titleExists) {
            throw new _common.ConflictException('Title');
        }
        category.title = payload.title;
        category.content = payload.content;
        category.date = payload.date;
        category.image = payload.image;
        return await _newsentities.NewsEntities.save(category);
    }
};
UpdateNewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateNewsHandler);

//# sourceMappingURL=update-news.handler.js.map