const Router = require("koa-router");
const router = new Router();

const validate = require("../middleware/requestValidator");
const userValidations = require("./user.validation");

const userController = require("./user.controller");

router.get("/timeline", validate(userValidations.getTimeline), userController.getTimeline);

module.exports = router;
