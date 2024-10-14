import express from "express";
import { TodoController } from "./src/controllers/TodoController";
import { TodoService } from "./src/services/TodoService";
import { TodoRepository } from "./src/repositories/TodoRepository";

const app = express();
const PORT = process.env.PORT || 7001;

app.use(express.json());

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

app.get("/todos", (req, res) => todoController.getAllTodos(req, res));
app.post("/todos", (req, res) => todoController.createTodo(req, res));
app.delete("/todos/:id", (req, res) => todoController.deleteTodo(req, res));

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
