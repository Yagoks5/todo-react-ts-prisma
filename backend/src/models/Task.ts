import { InterfaceTask } from "../interfaces/InterfaceTask";
export class Task implements InterfaceTask {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public collectionId: number
  ) {}
}
