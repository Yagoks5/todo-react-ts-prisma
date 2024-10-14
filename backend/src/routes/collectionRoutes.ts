import { Router } from "express";
import { CollectionService } from "../services/CollectionService";
import { CollectionReposiroty } from "../repositories/CollectionRepository";

const collectionRouter = Router();
const collectionRepository = new CollectionReposiroty();
const collectionService = new CollectionService(collectionRepository);

collectionRouter.get("/", async (req, res) => {
  const collections = await collectionService.getAllCollections();
  res.json(collections);
});

collectionRouter.get("/:id", async (req, res) => {
  const collection = await collectionService.getCollectionById(
    Number(req.params.id)
  );
  if (collection) {
    res.json(collection);
  }
});

collectionRouter.post("/", async (req, res) => {
  const { name } = req.body;
  const newCollection = await collectionService.createCollection(name);
  res.json(newCollection);
});

collectionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await collectionService.deleteCollection(Number(id));
  res.send();
});

export { collectionRouter };
