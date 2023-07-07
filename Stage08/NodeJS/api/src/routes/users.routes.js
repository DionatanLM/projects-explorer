const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouter = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

userRouter.get("/", usersController.get);
userRouter.post("/", usersController.create);
userRouter.put("/", ensureAuthenticated, usersController.update);
userRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  (req, res) => {
    console.log(req.file.filename);
  }
);

module.exports = userRouter;
