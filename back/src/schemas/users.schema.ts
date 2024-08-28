import { z } from "zod";

// Schema completo do usuário
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

// Schema para criação de usuário, omitindo o ID
const userSchemaRequest = userSchema.omit({
  id: true,
});

// Schema de resposta do usuário, omitindo o password
const userSchemaResponse = userSchema.omit({
  password: true,
});

// Schema de resposta com array de usuários
const usersSchemaResponse = z.array(userSchemaResponse);

// Schema para a atualização de usuário, tornando os campos opcionais
const userSchemaUpdate = userSchema.partial().omit({
  id: true,
});

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};
