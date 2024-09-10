import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(4, "O título deve ter pelo menos 4 caracteres."),
  description: z.string().min(1, "A descrição é obrigatória."),
});

export type TAddTask = z.infer<typeof taskSchema>;
