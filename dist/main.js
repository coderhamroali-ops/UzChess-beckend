"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swaggersconfigs = require("./core/configs/swaggers.configs");
const _common = require("@nestjs/common");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    (0, _swaggersconfigs.SwaggersConfigs)(app);
    app.useGlobalPipes(new _common.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    await app.listen(8000);
}
bootstrap();

//# sourceMappingURL=main.js.map