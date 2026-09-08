"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateReportCategoriesHandler", {
    enumerable: true,
    get: function() {
        return UpdateReportCategoriesHandler;
    }
});
const _common = require("@nestjs/common");
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
let UpdateReportCategoriesHandler = class UpdateReportCategoriesHandler {
    async execute(id, payload) {
        const category = await _reportCategoriesentities.ReportCategoriesEntities.findOne({
            where: {
                id
            }
        });
        if (!category) {
            throw new _common.NotFoundException('Report category not found');
        }
        category.title = payload.title;
        category.order = payload.order;
        return await category.save();
    }
};
UpdateReportCategoriesHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateReportCategoriesHandler);

//# sourceMappingURL=update-reportCategories.handler.js.map