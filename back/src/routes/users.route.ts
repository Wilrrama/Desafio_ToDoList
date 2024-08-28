import { Router } from "express";
import { usersController } from "../controllers";

const usersRoutes = Router();

usersRoutes.post("", (req, res) => {
  usersController.createUserController(req, res);
});
usersRoutes.get("", (req, res) => {
  usersController.listUsersController(req, res);
});
usersRoutes.delete("/:userId", (req, res) => {
  usersController.deleteUserController(req, res);
});

usersRoutes.patch("/:userId", (req, res) => {
  usersController.updateUserController(req, res);
});

export { usersRoutes };
