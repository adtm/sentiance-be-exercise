const Logger = require("../utils/Logger/logger");

const ErrorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    Logger.error(err.message);

    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
};

module.exports = ErrorHandler;
