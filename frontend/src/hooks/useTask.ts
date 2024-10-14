// src/hooks/useTasks.ts
import { useEffect, useState } from "react";
import {
  fetchTasksByCollectionId,
  createTask,
  deleteTask,
} from "../services/api";
import { Task } from "../types/Task";

export const useTasks = (selectedCollectionId: number | null) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  useEffect(() => {
    const getTasks = async () => {
      if (selectedCollectionId !== null) {
        const data = await fetchTasksByCollectionId(selectedCollectionId);
        setTasks(data);
      }
    };

    getTasks();
  }, [selectedCollectionId]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== "" && selectedCollectionId !== null) {
      const newTask = await createTask(newTaskTitle, selectedCollectionId);
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
