const Joi = require("joi");

const validateObject = (object = {}, label, schema) => {
  if (schema) {
    const { error } = Joi.validate(object, schema);
    if (error) {
      throw new Error(`Invalid ${label} - ${error.message}`);
    }
  }
};

const validate = validationObj => (ctx, next) => {
  try {
    validateObject(ctx.headers, "Headers", validationObj.headers);
    validateObject(ctx.params, "URL Parameters", validationObj.params);
    validateObject(ctx.query, "URL Query", validationObj.query);

    return next();
  } catch (err) {
    ctx.throw(400, err.message);
  }
};

module.exports = validate;
