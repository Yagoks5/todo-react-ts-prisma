import express from "express";
import { json } from "body-parser";
import { collectionRouter } from "./src/routes/collectionRoutes";
import { taskRouter } from "./src/routes/taskRoutes";

const app = express();
const PORT = 7001;

app.use(json());

app.use("/collections", collectionRouter);
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
