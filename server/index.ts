/// <reference types="es4x" />
// @ts-check

// your code goes here...
import { Router, CorsHandler, RoutingContext } from '@vertx/web';
import { HttpMethod } from '@vertx/core/enums';
const router = Router.router(vertx);
const methods = [HttpMethod.POST, HttpMethod.GET, HttpMethod.PUT, HttpMethod.OPTIONS, HttpMethod.DELETE];
const headers = ['Authorization', 'Content-Type', 'Access-Control-Allow-Origin'];
router.route().handler(CorsHandler.create("*").allowedMethods(methods).allowedHeaders(headers));

function indexHandler(context: RoutingContext) {
  context.response()
      .putHeader('content-type', 'application/json')
    .end(JSON.stringify({ data: '测试成功，自动重启后端' }));
}

router.get('/').handler(indexHandler);



vertx
  .createHttpServer()
  .requestHandler(router).listen(8888);

console.log('Listening at http://127.0.0.1:8888');
