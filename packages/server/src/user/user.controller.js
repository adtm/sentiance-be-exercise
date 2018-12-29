const userService = require("./user.service");

const getTimeline = async ctx => {
  const { start, end } = ctx.query;
  ctx.body = await userService.getTimeline({ start, end });
};

module.exports = { getTimeline };
