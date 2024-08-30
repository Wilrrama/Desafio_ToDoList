import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { tasksController } from "../controllers";
import { taskSchemaRequest, taskSchemaUpdate } from "../schemas/tasks.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const tasksRoutes = Router();

tasksRoutes.use(ensureAuthMiddleware);

tasksRoutes.post(
  "",
  ensureDataIsValidMiddleware(taskSchemaRequest),
  (req, res) => tasksController.createTask(req, res)
);

tasksRoutes.get("", (req, res) => tasksController.listTasks(req, res));

tasksRoutes.get("/:taskId", ensureIsOwnerMiddleware, (req, res) =>
  tasksController.listOneTask(req, res)
);

tasksRoutes.delete("/:taskId", ensureIsOwnerMiddleware, (req, res) =>
  tasksController.deleteTask(req, res)
);

tasksRoutes.patch(
  "/:taskId",
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(taskSchemaUpdate),
  (req, res) => tasksController.updateTask(req, res)
);

export { tasksRoutes };
