import { hash } from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import {
  userSchemaResponse,
  userSchemaUpdate,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { AppError } from "../errors/AppError";

class UsersService {
  async createUserService({
    name,
    email,
    password,
  }: TUserRequest): Promise<TUserResponse> {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({ where: { email } });
    if (findUser) {
      throw new AppError("User already exists", 409);
    }

    const hashedPassowrd = await hash(password, 10);

    const user = userRepository.create({
      email,
      name,
      password: hashedPassowrd,
    });

    await userRepository.save(user);
    console.log(userSchemaResponse.parse(user));
    return userSchemaResponse.parse(user);
  }

  async ListUsersService() {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return usersSchemaResponse.parse(users);
  }

  async ListOneUserById(id: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      throw new AppError("User not found");
    }

    return userSchemaResponse.parse(user);
  }

  async DeleteUserService(id: string): Promise<void> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      throw new AppError("User not found");
    }
    await userRepository.remove(user);
  }

  async UpdateUserService(
    id: string,
    { name, email, password }: Partial<TUserRequest>
  ) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      throw new AppError("User notFound");
    }

    if (name) user.name = name;
    if (email) {
      const findUser = await userRepository.findOne({ where: { email } });
      if (findUser && findUser.id !== user.id) {
        throw new AppError("email already in use by another user", 409);
      }
      user.email = email;
    }
    if (password) {
      user.password = await hash(password, 10);
    }

    await userRepository.save(user);

    return userSchemaUpdate.parse(user);
  }
}

export { UsersService };
