"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateReportCategoriesHandler", {
    enumerable: true,
    get: function() {
        return CreateReportCategoriesHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
const _reportCategoriesentities = require("../../../entities/reportCategories.entities");
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
let CreateReportCategoriesHandler = class CreateReportCategoriesHandler {
    async execute(payload) {
        const categoryExists = await _reportCategoriesentities.ReportCategoriesEntities.existsBy({
            title: (0, _typeorm.ILike)(payload.title)
        });
        if (categoryExists) {
            throw new _common.ConflictException('Report category already exists');
        }
        const newCategory = _reportCategoriesentities.ReportCategoriesEntities.create({
            title: payload.title,
            order: payload.order
        });
        return await newCategory.save();
    }
};
CreateReportCategoriesHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateReportCategoriesHandler);

//# sourceMappingURL=create-reportCategories.handler.js.map