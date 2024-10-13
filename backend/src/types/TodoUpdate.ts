import { InterfaceTodo } from "../interfaces/InterfaceTodo";

export type TodoUpdate = Omit<InterfaceTodo, "id" | "createdAt">;
