export abstract class BaseRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: number): Promise<T | null>;
  abstract create(data: Partial<T>): Promise<T>;
  abstract delete(id: number): Promise<void>;
}
