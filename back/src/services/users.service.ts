import { hash } from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import {
  TUserRequest,
  TUserResponse,
  TUser,
} from "../interfaces/users.interfaces";
import {
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";

class UsersService {
  async createUserService({
    name,
    email,
    password,
  }: TUserRequest): Promise<TUserResponse> {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({ where: { email } });
    if (findUser) {
      throw new Error("User already exists");
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

  async DeleteUserService(id: string): Promise<void> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found");
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
      throw new Error("User notFound");
    }

    if (name) user.name = name;
    if (email) {
      const findUser = await userRepository.findOne({ where: { email } });
      if (findUser && findUser.id !== user.id) {
        throw new Error("email already in use by another user");
      }
      user.email = email;
    }
    if (password) {
      user.password = await hash(password, 10);
    }

    await userRepository.save(user);

    return userSchemaResponse.parse(user);
  }
}

export { UsersService };
