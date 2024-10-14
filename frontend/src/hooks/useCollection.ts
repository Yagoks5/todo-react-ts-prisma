// src/hooks/useCollections.ts
import { useEffect, useState } from "react";
import {
  fetchCollections,
  fetchTasksByCollectionId,
  createTask,
  deleteTask,
  createCollection,
} from "../services/api";
import { Collection } from "../types/Collection";
import { Task } from "../types/Task";

export const useCollections = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | null
  >(null);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newCollectionName, setNewCollectionName] = useState<string>("");

  useEffect(() => {
    const getCollections = async () => {
      const data = await fetchCollections();
      setCollections(data);
    };

    getCollections();
  }, []);

  useEffect(() => {
    if (selectedCollectionId !== null) {
      const getTasks = async () => {
        const data = await fetchTasksByCollectionId(selectedCollectionId);
        setTasks(data);
      };

      getTasks();
    }
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

  const handleCreateCollection = async () => {
    if (newCollectionName.trim() === "") return;
    await createCollection(newCollectionName);
    const updatedCollections = await fetchCollections();
    setCollections(updatedCollections);
    setNewCollectionName("");
  };

  return {
    collections,
    tasks,
    selectedCollectionId,
    setSelectedCollectionId,
    newTaskTitle,
    setNewTaskTitle,
    newCollectionName,
    setNewCollectionName,
    handleCreateTask,
    handleDeleteTask,
    handleCreateCollection,
  };
};
