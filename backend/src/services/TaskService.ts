import { TaskRepository } from "../repositories/TaskRepository";
import { CreateTaskInput } from "../types/CreateTaskInput";
import { CollectionReposiroty } from "../repositories/CollectionRepository";
import { Task } from "../models/Task";

export class TaskService {
  private taskRepository: TaskRepository;
  private collectionRepository: CollectionReposiroty;

  constructor(
    taskRepository: TaskRepository,
    collectionRepository: CollectionReposiroty
  ) {
    this.taskRepository = taskRepository;
    this.collectionRepository = collectionRepository;
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.getAll();
  }

  async createTask(input: CreateTaskInput): Promise<Task> {
    return this.taskRepository.create(input);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async getTasksByCollection(collectionId: number): Promise<Task[]> {
    return this.taskRepository.getByCollectionId(collectionId);
  }
}
