const { Router } = require("express");
const userRouter = Router();
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

userRouter.get("/", usersController.get);
userRouter.post("/", usersController.create);
userRouter.put("/:id", usersController.update);

module.exports = userRouter;
