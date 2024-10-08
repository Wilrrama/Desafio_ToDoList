import { compare } from "bcrypt";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { sign } from "jsonwebtoken";
import "dotenv/config";

export class SessionService {
  async createLoginService({ email, password }: TLoginRequest) {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({ where: { email } });
    if (!findUser) {
      throw new AppError("Invalid credentials", 401);
    }

    const passwordMatch = await compare(password, findUser.password);
    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = sign({ userName: findUser.name }, process.env.SECRET_KEY!, {
      expiresIn: "1h",
      subject: findUser.id,
    });
    // return token;
    return { token, user: findUser };
  }
}
