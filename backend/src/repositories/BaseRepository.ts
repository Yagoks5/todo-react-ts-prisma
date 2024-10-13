export abstract class BaseRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: number): Promise<T | null>;
  abstract create(data: Partial<T>): Promise<T>;
  abstract update(id: number, data: Partial<T>): Promise<T | null>;
  abstract delete(id: number): Promise<void>;
}
