import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controller";
import { SessionService } from "../services/session.service";
import { SessionController } from "./session.controller";
import { TasksService } from "../services/tasks.service";
import { TasksController } from "./tasks.controller";

const userService = new UsersService();
const usersController = new UsersController(userService);

const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);

const taskService = new TasksService();
const tasksController = new TasksController(taskService);

export { usersController, sessionController, tasksController };
