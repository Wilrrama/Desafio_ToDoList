import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
  usersSchemaResponse,
} from "../schemas/users.schema";

// Tipos inferidos a partir dos schemas
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUserUpdate = z.infer<typeof userSchemaUpdate>;

export { TUserRequest, TUser, TUserResponse, TUsersResponse, TUserUpdate };
