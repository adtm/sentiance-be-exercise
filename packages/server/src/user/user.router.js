const Router = require("koa-router");
const router = new Router();

const userController = require("./user.controller");

router.get("/timeline", userController.getTimeline);

module.exports = router;
