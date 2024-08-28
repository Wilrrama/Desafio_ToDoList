import { UsersService } from "../services/users.service";
import { UsersController } from "./users.controller";

const userService = new UsersService();
const usersController = new UsersController(userService);

export { usersController };
