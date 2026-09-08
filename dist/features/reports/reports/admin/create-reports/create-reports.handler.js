"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateReportsHandler", {
    enumerable: true,
    get: function() {
        return CreateReportsHandler;
    }
});
const _common = require("@nestjs/common");
const _reportsentities = require("../../../entities/reports.entities");
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
let CreateReportsHandler = class CreateReportsHandler {
    async execute(payload) {
        const reportExists = await _reportsentities.ReportsEntity.exists({
            where: {
                userId: payload.userId,
                categoryId: payload.categoryId,
                target: payload.target,
                targetId: payload.targetId
            }
        });
        if (reportExists) {
            throw new _common.ConflictException('This report already exists');
        }
        const newReport = _reportsentities.ReportsEntity.create({
            userId: payload.userId,
            categoryId: payload.categoryId,
            target: payload.target,
            targetId: payload.targetId,
            description: payload.description
        });
        return await _reportsentities.ReportsEntity.save(newReport);
    }
};
CreateReportsHandler = _ts_decorate([
    (0, _common.Injectable)()
], CreateReportsHandler);

//# sourceMappingURL=create-reports.handler.js.map