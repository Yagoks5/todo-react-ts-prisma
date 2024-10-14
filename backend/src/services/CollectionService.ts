import { CollectionReposiroty } from "../repositories/CollectionRepository";

export class CollectionService {
  private collectionRepository: CollectionReposiroty;

  constructor(collectionRepository: CollectionReposiroty) {
    this.collectionRepository = collectionRepository;
  }

  async getAllCollections() {
    return this.collectionRepository.getAll();
  }

  async getCollectionById(id: number) {
    return this.collectionRepository.getById(id);
  }
  async createCollection(name: string) {
    return this.collectionRepository.create(name);
  }
  async deleteCollection(id: number) {
    return this.collectionRepository.delete(id);
  }
}
