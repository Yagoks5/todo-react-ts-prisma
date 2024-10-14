import { TodoService } from "../services/TodoService";
import { Request, Response } from "express";
import { CreateTaskInput } from "../types/CreateTaskInput";

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async getAllTodos(req: Request, res: Response): Promise<void> {
    const todos = await this.todoService.getAllTodos();
    res.json(todos);
  }

  async createTodo(req: Request, res: Response): Promise<void> {
    const input: CreateTaskInput = req.body;
    const newTodo = await this.todoService.createTodo(input);
    res.json(newTodo);
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.todoService.deleteTodo(Number(id));
    res.send();
  }
}
