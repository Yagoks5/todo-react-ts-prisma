import { InterfaceTodo } from "../interfaces/InterfaceTodo";
export class Todo implements InterfaceTodo {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public createdAt: Date
  ) {}
}
