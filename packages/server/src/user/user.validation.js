const Joi = require("joi");

const validations = {
  getTimeline: {
    query: {
      start: Joi.date().required(),
      end: Joi.date().required(),
    },
  },
};

module.exports = validations;
