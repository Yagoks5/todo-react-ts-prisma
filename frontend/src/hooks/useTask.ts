import { useEffect, useState } from "react";
import {
  fetchTasksByCollectionId,
  createTask,
  deleteTask,
} from "../services/api";
import { Task } from "../types/Task";

export const useTasks = (collectionId: number | null) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  useEffect(() => {
    const getTasks = async () => {
      if (collectionId !== null) {
        const data = await fetchTasksByCollectionId(collectionId);
        setTasks(data);
      }
    };

    getTasks();
  }, [collectionId]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== "" && collectionId !== null) {
      const newTask = await createTask(newTaskTitle, collectionId);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    await deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    newTaskTitle,
    setNewTaskTitle,
    handleCreateTask,
    handleDeleteTask,
  };
};
