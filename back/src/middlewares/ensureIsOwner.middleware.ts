import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../entities/tasks.entity";
import { AppError } from "../errors/AppError";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const taskId = req.params.taskId;
  const userId = res.locals.userId;

  const task = await taskRepository.findOne({
    where: {
      id: taskId,
    },
    relations: {
      user: true,
    },
  });

  if (!task) {
    throw new AppError("task not found", 404);
  }

  if (task.user.id != userId) {
    throw new AppError("You don´t have permission", 403);
  }

  return next();
};

export { ensureIsOwnerMiddleware };
