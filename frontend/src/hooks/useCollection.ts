import { useEffect, useState } from "react";
import {
  fetchCollections,
  fetchTasksByCollectionId,
  createCollection,
  deleteCollection,
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

  const handleCreateCollection = async () => {
    if (newCollectionName.trim() === "") return;
    await createCollection(newCollectionName);
    const updatedCollections = await fetchCollections();
    setCollections(updatedCollections);
    setNewCollectionName("");
  };

  const handleDeleteCollection = async (collectionId: number) => {
    await deleteCollection(collectionId);
    setCollections((prevCollections) =>
      prevCollections.filter((collection) => collection.id !== collectionId)
    );
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
    handleCreateCollection,
    handleDeleteCollection,
  };
};
// Fatorar esse return?
