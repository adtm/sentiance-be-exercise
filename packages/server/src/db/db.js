const Logger = require("../utils/Logger/logger");
const mongoose = require("mongoose");

const { URI, USER, PASSWORD } = require("./db.const");

const connect = () => {
  mongoose
    .connect(
      URI,
      {
        auth: {
          user: USER,
          password: PASSWORD,
        },
        useNewUrlParser: true,
      },
    )
    .then(
      () => Logger.info("Connected to DB succesfully!"),
      err => Logger.error("Couldn't connect to DB, err:" + err),
    );
};

module.exports = { connect };
