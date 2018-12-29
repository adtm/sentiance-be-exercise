const axios = require("axios");
const { DATASET_URL } = require("./api.const");

const get = async () => {
  const { data } = await axios.get(DATASET_URL);
  return data;
};

module.exports = { get };
