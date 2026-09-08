"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateNewsHandler", {
    enumerable: true,
    get: function() {
        return CreateNewsHandler;
    }
});
const _typeorm = require("typeorm");
const _common = require("@nestjs/common");
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
let CreateNewsHandler = class CreateNewsHandler {
    async execute(payload) {
        const titleExists = await _newsentities.NewsEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title),
            content: (0, _typeorm.ILike)(payload.content)
        });
        if (titleExists) throw new _common.ConflictException('Title already exists');
        const newcategories = {
            title: payload.title,
            content: payload.content,
            image: payload.image,
            date: payload.date
        };
        return await _newsentities.NewsEntities.save(newcategories);
    }
};
CreateNewsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateNewsHandler);

//# sourceMappingURL=create-news.handler.js.map