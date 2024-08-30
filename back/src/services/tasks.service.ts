import { AppDataSource } from "../data-source";
import { Task } from "../entities/tasks.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import {
  TTaskRequest,
  TTaskResponse,
  TTaskUpdate,
} from "../interfaces/tasks.interfaces";
import { taskSchema, tasksSchemaResponse } from "../schemas/tasks.schema";

class TasksService {
  async createTaskService(
    data: TTaskRequest,
    userId: string
  ): Promise<TTaskResponse> {
    const userRepository = AppDataSource.getRepository(User);
    const taskRepository = AppDataSource.getRepository(Task);
    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const task: Task = taskRepository.create({
      ...data,
      user,
    });

    await taskRepository.save(task);

    return taskSchema.parse(task);
  }

  async listTasksService(userId: string) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: {
        tasks: true,
      },
    });
    if (!user) {
      throw new AppError("User not found", 404);
    }

    return tasksSchemaResponse.parse(user.tasks);
  }

  async updateTaskService(
    data: TTaskUpdate,
    taskId: string
  ): Promise<TTaskResponse> {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOneBy({ id: taskId });
    if (!task) {
      throw new AppError("Task not found", 404);
    }

    Object.assign(task, data);

    await taskRepository.save(task);

    return taskSchema.parse(task);
  }
  async deleteTaskService(id: string): Promise<void> {
    const taskRepository = AppDataSource.getRepository(Task);
    const task = await taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new AppError("Task not found", 404);
    }

    await taskRepository.remove(task);
  }

  async listOneTask(id: string) {
    const taskRepository = AppDataSource.getRepository(Task);

    console.log(`Buscando a tarefa com o ID: ${id}`);

    const task = await taskRepository.findOneBy({ id });
    if (!task) {
      throw new AppError("Task not found", 404);
    }

    console.log(`Tarefa encontrada:`, task);

    return taskSchema.parse(task);
  }
}

export { TasksService };
