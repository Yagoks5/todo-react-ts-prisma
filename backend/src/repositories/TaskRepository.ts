import { Task } from "../models/Task";
import { prisma } from "../database/PrismaClient";
import { CreateTaskInput } from "../types/CreateTaskInput";

export class TaskRepository {
  async getAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany();
    return tasks.map(
      (task) => new Task(task.id, task.title, task.completed, task.collectionId)
    );
  }

  async getByCollectionId(collectionId: number): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      where: { collectionId },
    });
    return tasks.map(
      (task) => new Task(task.id, task.title, task.completed, task.collectionId)
    );
  }

  async create(input: CreateTaskInput): Promise<Task> {
    const newTask = await prisma.task.create({
      data: { title: input.title, collectionId: input.collectionId },
    });
    return new Task(
      newTask.id,
      newTask.title,
      newTask.completed,
      newTask.collectionId
    );
  }

  async delete(id: number): Promise<void> {
    await prisma.task.delete({
      where: { id },
    });
  }
}
