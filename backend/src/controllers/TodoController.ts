// src/controllers/TodoController.ts
import { TodoService } from "../services/TodoService";
import { Request, Response } from "express";

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
    const { title } = req.body;
    const newTodo = await this.todoService.createTodo(title);
    res.status(201).json(newTodo);
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data = req.body;
    const updatedTodo = await this.todoService.updateTodo(Number(id), data);
    res.json(updatedTodo);
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.todoService.deleteTodo(Number(id));
    res.status(204).send();
  }
}
