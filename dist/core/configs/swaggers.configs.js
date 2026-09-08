"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SwaggersConfigs", {
    enumerable: true,
    get: function() {
        return SwaggersConfigs;
    }
});
const _swagger = require("@nestjs/swagger");
function SwaggersConfigs(app) {
    const config = new _swagger.DocumentBuilder().setTitle('UsChess Backend APIs').setVersion('v1.0.0').build();
    const doc = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('/swagger', app, doc);
}

//# sourceMappingURL=swaggers.configs.js.map