require("dotenv").config();

const cluster = require("cluster");
const os = require("os");

const app = require("./app");
const Logger = require("./utils/Logger/logger");

if (cluster.isMaster) {
  Logger.info(`Master ${process.pid} is up!`);
  const cpuCount = os.cpus().length;

  for (let i = 0; i < cpuCount; ++i) cluster.fork();

  cluster.on("exit", (worker, code) => {
    Logger.error(`Worker ${worker.id} died with ${code}`);
    // cluster.fork();
  });
} else app.listen(process.env.PORT, () => Logger.info("Listening on Port: " + process.env.PORT));

module.exports = app;
