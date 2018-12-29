const Koa = require("koa");
const requestLogger = require("koa-logger");

require("./db/db").connect();
const Router = require("./router");
const ErrorHandler = require("./middleware/errorHandler");

const app = new Koa();
app.use(requestLogger());
app.use(ErrorHandler);
app.use(Router.routes());
app.use(Router.allowedMethods());

// const { prefillDatabase } = require("./src/db/utils/prefill.db");
// (async () => {
//   await prefillDatabase();
// })();

module.exports = app;
