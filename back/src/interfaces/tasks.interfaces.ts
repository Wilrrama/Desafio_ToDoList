import { z } from "zod";
import {
  taskSchema,
  taskSchemaRequest,
  taskSchemaUpdate,
  tasksSchemaResponse,
} from "../schemas/tasks.schema";

type TTaskRequest = z.infer<typeof taskSchemaRequest>;
type TTask = z.infer<typeof taskSchema>;
type TTaskResponse = z.infer<typeof taskSchema>;
type TTasksResponse = z.infer<typeof tasksSchemaResponse>;
type TTaskUpdate = z.infer<typeof taskSchemaUpdate>;

export { TTaskRequest, TTask, TTaskResponse, TTasksResponse, TTaskUpdate };
