const Koa = require("koa");
const requestLogger = require("koa-logger");
const cors = require("@koa/cors");

require("./db/db").connect();
const Router = require("./router");
const ErrorHandler = require("./middleware/errorHandler");

const app = new Koa();

app.use(cors());
app.use(requestLogger());
app.use(ErrorHandler);
app.use(Router.routes());
app.use(Router.allowedMethods());

module.exports = app;
