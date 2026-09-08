"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UpdateReportsHandler", {
    enumerable: true,
    get: function() {
        return UpdateReportsHandler;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("typeorm");
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
let UpdateReportsHandler = class UpdateReportsHandler {
    async execute(id, payload) {
        const report = await _reportsentities.ReportsEntity.findOneBy({
            id
        });
        if (!report) {
            throw new _common.NotFoundException('Report not found');
        }
        const reportExists = await _reportsentities.ReportsEntity.exists({
            where: {
                id: (0, _typeorm.Not)(report.id),
                userId: payload.userId,
                categoryId: payload.categoryId,
                target: payload.target,
                targetId: payload.targetId
            }
        });
        if (reportExists) {
            throw new _common.ConflictException('This report already exists');
        }
        report.userId = payload.userId;
        report.categoryId = payload.categoryId;
        report.target = payload.target;
        report.targetId = payload.targetId;
        report.description = payload.description;
        return await _reportsentities.ReportsEntity.save(report);
    }
};
UpdateReportsHandler = _ts_decorate([
    (0, _common.Injectable)()
], UpdateReportsHandler);

//# sourceMappingURL=update-reports.handler.js.map