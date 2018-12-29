require("dotenv").config();

const Koa = require("koa");
const requestLogger = require("koa-logger");

require("./src/db/db").connect();
const Router = require("./src/router");
const Logger = require("./src/utils/Logger/logger");

const app = new Koa();
app.use(requestLogger());
app.use(Router.routes(), Router.allowedMethods());

// const { prefillDatabase } = require("./src/db/utils/prefill.db");
// (async () => {
//   await prefillDatabase();
// })();

app.listen(process.env.PORT, () => Logger.info("Listening on Port: " + process.env.PORT));
