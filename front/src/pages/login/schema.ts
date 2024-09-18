import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("O e-mail fornecido é inválido."),
  password: z
    .string()
    .min(1, "A senha é obrigatória.")
    .min(
      6,
      "A senha deve ter no mínimo 6 caracteres. E conter 1 carctere especial "
    )
    .regex(
      /[^a-zA-Z0-9]/,
      "A senha deve conter pelo menos um caractere especial."
    ),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;
