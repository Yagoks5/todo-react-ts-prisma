// Task.ts - Modelo referencia
class Task {
  title: string;
  completed: boolean;
  collectionId: number;

  constructor(title: string, completed: boolean = false, collectionId: number) {
    this.title = title;
    this.completed = completed;
    this.collectionId = collectionId;
  }

  hasError(): boolean {
    if (this.title.length < 5 || this.title.length > 100) {
      return true;
    }
    return false;
  }
}

// const tarefa1 = new Task("Lavar a louca",false ,1);
// console.log(tarefa1);

class CreateTask {
  constructor(private taskCollection: TaskCollection) {}

  execute(input: CreateTaskInput): [Task | undefined, Error | undefined] {
    const newTask = new Task(input.title, input.completed, input.collectionId);

    if (newTask.hasError()) {
      return [undefined, new Error("Tarefa com erro")];
    }

    this.taskCollection.save(newTask);
    return [newTask, undefined];
  }
}

//Aqui é o tipo da entrada?
type CreateTaskInput = {
  collectionId: number;
  completed: boolean | undefined;
  title: string;
};

//
interface Repository<T> {
  save(entity: T): T;
  find(id: number): T;
  getAll(): T[];
  delete(id: number): T;
}

abstract class TaskCollection implements Repository<Task> {
  abstract save(entity: Task): Task;
  abstract find(id: number): Task;
  abstract getAll(): Task[];
  abstract delete(id: number): Task;
}

class TaskCollectionMemory implements TaskCollection {
  private tasks: Task[] = [];

  save(entity: Task): Task {
    this.tasks.push(entity);
    return entity;
  }
  find(id: number): Task {
    throw new Error("Method not implemented.");
  }
  getAll(): Task[] {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Task {
    throw new Error("Method not implemented.");
  }
}

const createTask = new CreateTask(new TaskCollectionMemory());

router.post("/task", (req, res) => {
  const [result, erro] = createTask.execute(req.body);

  if (erro) {
    return res.status(422).send(erro);
  }
  return res.json(result);
});
