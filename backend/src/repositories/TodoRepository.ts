import { PrismaClient } from "@prisma/client";
import { Todo } from "../models/Todo";

export class TodoRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(title: string): Promise<Todo> {
    const newTodo = await this.prisma.todo.create({
      data: { title, completed: false },
    });
    return newTodo;
  }

  async updateTodo(id: number, data: Partial<Todo>): Promise<Todo | null> {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async deleteTodo(id: number): Promise<void> {
    await this.prisma.todo.delete({ where: { id } });
  }
}
