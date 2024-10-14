import { Router } from "express";
import { TaskService } from "../services/TaskService";
import { TaskRepository } from "../repositories/TaskRepository";
import { CollectionReposiroty } from "../repositories/CollectionRepository";

const taskRouter = Router();
const taskService = new TaskService(
  new TaskRepository(),
  new CollectionReposiroty()
);

taskRouter.get("/collection/:collectionId", async (req, res) => {
  const tasks = await taskService.getTasksByCollection(
    Number(req.params.collectionId)
  );
  res.json(tasks);
});

taskRouter.post("/", async (req, res) => {
  const { title, collectionId } = req.body;
  const newTask = await taskService.createTask({ title, collectionId });
  res.json(newTask);
});

taskRouter.delete("/task/:id", async (req, res) => {
  await taskService.deleteTask(Number(req.params.id));
  res.end();
});

export { taskRouter };
