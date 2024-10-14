import { TaskService } from "../services/TaskService";
import { Request, Response } from "express";
import { CreateTaskInput } from "../types/CreateTaskInput";

export class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    const todos = this.taskService.getAllTasks;
    res.json(todos);
  }

  async createTask(req: Request, res: Response): Promise<void> {
    const input: CreateTaskInput = req.body;
    const newTodo = await this.taskService.createTask(input);
    res.json(newTodo);
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.taskService.deleteTask(Number(id));
    res.send();
  }
}
