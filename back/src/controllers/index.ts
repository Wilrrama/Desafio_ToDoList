import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controller";
import { SessionService } from "../services/session.service";
import { SessionController } from "./session.controller";

const userService = new UsersService();
const usersController = new UsersController(userService);

const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);

export { usersController, sessionController };
