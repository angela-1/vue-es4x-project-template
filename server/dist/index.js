"use strict";
/// <reference types="es4x" />
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
// your code goes here...
var web_1 = require("@vertx/web");
var enums_1 = require("@vertx/core/enums");
var router = web_1.Router.router(vertx);
var methods = [enums_1.HttpMethod.POST, enums_1.HttpMethod.GET, enums_1.HttpMethod.PUT, enums_1.HttpMethod.OPTIONS, enums_1.HttpMethod.DELETE];
var headers = ['Authorization', 'Content-Type', 'Access-Control-Allow-Origin'];
router.route().handler(web_1.CorsHandler.create("*").allowedMethods(methods).allowedHeaders(headers));
function indexHandler(context) {
    context.response()
        .putHeader('Content-Type', 'application/json')
        .end(JSON.stringify({ data: 'hello, world' }));
}
router.get('/').handler(indexHandler);
vertx
    .createHttpServer()
    .requestHandler(router).listen(8888);
console.log('Listening at http://127.0.0.1:8888');
//# sourceMappingURL=index.js.map