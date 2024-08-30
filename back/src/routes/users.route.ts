import { Router } from "express";
import { usersController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  (req, res) => usersController.createUser(req, res)
);

usersRoutes.get("", (req, res) => {
  usersController.listUsers(req, res);
});

usersRoutes.get("/:userId", (req, res) => {
  usersController.listOneUser(req, res);
});

usersRoutes.delete("/:userId", (req, res) => {
  usersController.deleteUser(req, res);
});

usersRoutes.patch(
  "/:userId",
  ensureDataIsValidMiddleware(userSchemaRequest),
  (req, res) => {
    usersController.updateUser(req, res);
  }
);

export { usersRoutes };
