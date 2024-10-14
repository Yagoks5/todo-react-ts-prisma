import { CollectionReposiroty } from "../repositories/CollectionRepository";

export class CollectionService {
  private collectionRepository: CollectionReposiroty;

  constructor(collectionRepository: CollectionReposiroty) {
    this.collectionRepository = collectionRepository;
  }

  // Método para buscar todas as coleções
  async getAllCollections() {
    return this.collectionRepository.getAll();
  }

  // Método para buscar uma coleção por ID
  async getCollectionById(id: number) {
    return this.collectionRepository.getById(id);
  }
  async createCollection(name: string) {
    return this.collectionRepository.create(name);
  }
}
