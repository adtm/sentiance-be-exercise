const Router = require("koa-router");
const router = new Router();

const userRouter = require("./user/user.router");

router.use("/user", userRouter.routes());

module.exports = router;
