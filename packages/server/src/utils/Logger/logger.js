const { RED, YELLOW, GREEN } = require("./logger.const");

const Logger = {
  error: msg => console.log(RED, msg),
  debug: msg => console.log(YELLOW, msg),
  info: msg => console.log(GREEN, msg),
};

module.exports = Logger;
