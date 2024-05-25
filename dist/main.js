"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const transform_interceptor_1 = require("./transform/transform.interceptor");
const http_execption_filter_1 = require("./http-execption/http-execption.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new http_execption_filter_1.HttpExceptionFilter());
    await app.listen(3005);
}
bootstrap();
//# sourceMappingURL=main.js.map