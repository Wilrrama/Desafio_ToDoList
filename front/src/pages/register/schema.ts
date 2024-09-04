import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve ter no mínimo 3 caracteres.")
      .regex(/[A-Z]/, "O nome deve conter pelo menos uma letra maiúscula."),
    email: z.string().email("O e-mail fornecido é inválido."),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .regex(
        /[^a-zA-Z0-9]/,
        "A senha deve conter pelo menos um caractere especial."
      ),
    confirmPassword: z.string().optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export type TRegisterForm = z.infer<typeof registerFormSchema>;
