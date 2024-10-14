import { prisma } from "../database/PrismaClient";
import { Collection } from "../models/Collection";

export class CollectionReposiroty {
  async getAll(): Promise<Collection[]> {
    const collections = await prisma.collection.findMany();
    return collections.map(
      (collection) => new Collection(collection.id, collection.name)
    );
  }

  async getById(id: number): Promise<Collection | null> {
    const collection = await prisma.collection.findUnique({ where: { id } });
    if (!collection) return null; // tirar daqui?
    return new Collection(collection.id, collection.name);
  }

  async create(name: string): Promise<Collection> {
    const newCollection = await prisma.collection.create({
      data: { name },
    });
    return new Collection(newCollection.id, newCollection.name);
  }

  async delete(id: number): Promise<Collection> {
    // Primeiro, deletar as tarefas relacionadas
    await prisma.task.deleteMany({
      where: { collectionId: id },
    });

    // Agora, deletar a coleção
    const deletedCollection = await prisma.collection.delete({
      where: { id },
    });

    return deletedCollection;
  }
}
