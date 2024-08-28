import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { UsersService } from "../services/users.service";
import { AppError } from "../errors/AppError";

class UsersController {
  constructor(private userService: UsersService) {}
  async createUserController(req: Request, res: Response) {
    try {
      const { name, email, password }: TUserRequest = req.body;
      const newUser = await this.userService.createUserService({
        name,
        email,
        password,
      });
      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(400).json({ error: (err as AppError).message });
    }
  }

  async listUsersController(_: Request, res: Response) {
    const users = await this.userService.ListUsersService();
    return res.json(users);
  }

  async deleteUserController(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      console.log("Deleting user with ID:", userId);
      await this.userService.DeleteUserService(userId);
      return res.status(204).json();
    } catch (err) {
      return res.status(404).json({ error: (err as AppError).message });
    }
  }

  async updateUserController(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const userData: Partial<TUserRequest> = req.body;
      const updatedUser = await this.userService.UpdateUserService(
        userId,
        userData
      );
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(404).json({ error: (err as AppError).message });
    }
  }
}
export { UsersController };
