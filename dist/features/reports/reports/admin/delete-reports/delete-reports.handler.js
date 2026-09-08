"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DeleteReportsHandler", {
    enumerable: true,
    get: function() {
        return DeleteReportsHandler;
    }
});
const _common = require("@nestjs/common");
const _reportsentities = require("../../../entities/reports.entities");
let DeleteReportsHandler = class DeleteReportsHandler {
    async execute(id) {
        const report = await _reportsentities.ReportsEntity.findOneBy({
            id
        });
        if (!report) {
            throw new _common.NotFoundException('Report not found');
        }
        return await _reportsentities.ReportsEntity.remove(report);
    }
};

//# sourceMappingURL=delete-reports.handler.js.map