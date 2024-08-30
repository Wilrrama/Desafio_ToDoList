import { Request, Response } from "express";
import { TasksService } from "../services/tasks.service";
import { TTasksResponse, TTaskUpdate } from "../interfaces/tasks.interfaces";
import { AppError } from "../errors/AppError";
class TasksController {
  constructor(private tasksService: TasksService) {}
  async createTask(req: Request, res: Response) {
    const userId = res.locals.userId;

    const newTask = await this.tasksService.createTaskService(req.body, userId);

    return res.status(201).json(newTask);
  }

  async listTasks(req: Request, res: Response) {
    const userId = res.locals.userId;

    const tasks: TTasksResponse = await this.tasksService.listTasksService(
      userId
    );

    res.json(tasks);
  }

  async listOneTask(req: Request, res: Response) {
    const taskId: string = req.params.taskId;
    const task = await this.tasksService.listOneTask(taskId);

    res.json(task);
  }

  async updateTask(req: Request, res: Response) {
    const taskData: TTaskUpdate = req.body;
    const taskId = req.params.taskId;

    const updateTask = await this.tasksService.updateTaskService(
      taskData,
      taskId
    );

    return res.json(updateTask);
  }

  async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const taskId = req.params.taskId;
      console.log("Deleting task with ID:", taskId);
      await this.tasksService.deleteTaskService(taskId);
      return res.status(204).send();
    } catch (err) {
      return res.status(404).json({ error: (err as AppError).message });
    }
  }
}

export { TasksController };
