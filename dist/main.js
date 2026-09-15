"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swaggersconfigs = require("./core/configs/swaggers.configs");
const _common = require("@nestjs/common");
const _path = require("path");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.useStaticAssets((0, _path.join)(__dirname, "..", "uploads"), {
        prefix: "/uploads/"
    });
    (0, _swaggersconfigs.SwaggersConfigs)(app);
    app.useGlobalPipes(new _common.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    await app.listen(8000);
}
bootstrap();

//# sourceMappingURL=main.js.map