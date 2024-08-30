import { z } from "zod";

const taskSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  status: z.boolean(),
});

const taskSchemaRequest = taskSchema.omit({
  id: true,
  status: true,
});

const tasksSchemaResponse = z.array(taskSchema);

const taskSchemaUpdate = taskSchema.partial().omit({
  id: true,
});

export { taskSchema, taskSchemaRequest, tasksSchemaResponse, taskSchemaUpdate };
