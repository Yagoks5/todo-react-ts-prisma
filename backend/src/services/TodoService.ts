import { TodoRepository } from "../repositories/TodoRepository";
import { Todo } from "../models/Todo";

export class TodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.getAllTodos();
  }

  async createTodo(title: string): Promise<Todo> {
    return this.todoRepository.createTodo(title);
  }

  async updateTodo(id: number, data: Partial<Todo>): Promise<Todo | null> {
    return this.todoRepository.updateTodo(id, data);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.deleteTodo(id);
  }
}
