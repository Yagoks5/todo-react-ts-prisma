import { Todo } from "../models/Todo";
import { BaseRepository } from "./BaseRepository";
import { prisma } from "../database/PrismaClient";
import { CreateTaskInput } from "../types/CreateTaskInput";

export class TodoRepository extends BaseRepository<Todo> {
  async getAll(): Promise<Todo[]> {
    const todos = await prisma.todo.findMany();
    return todos.map(
      (todo) => new Todo(todo.id, todo.title, todo.completed, todo.createdAt)
    );
  }

  async getById(id: number): Promise<Todo | null> {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return todo
      ? new Todo(todo.id, todo.title, todo.completed, todo.createdAt)
      : null;
  }

  async create(data: CreateTaskInput): Promise<Todo> {
    const newTodo = await prisma.todo.create({ data });
    return new Todo(
      newTodo.id,
      newTodo.title,
      newTodo.completed,
      newTodo.createdAt
    );
  }

  async delete(id: number): Promise<void> {
    await prisma.todo.delete({ where: { id } });
  }
}
