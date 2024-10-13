// src/services/TodoService.ts
import { TodoRepository } from "../repositories/TodoRepository";
import { CreateTaskInput } from "../types/CreateTaskInput";
import { Todo } from "../models/Todo";

export class TodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }

  async createTodo(input: CreateTaskInput): Promise<Todo> {
    return this.todoRepository.create(input);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
