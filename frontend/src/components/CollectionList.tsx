import React, { useEffect, useState } from "react";
import {
  deleteTask,
  fetchCollections,
  fetchTasksByCollectionId,
} from "../services/api";
import { Collection } from "../types/Collection";
import { Task } from "../types/Task";

const CollectionList: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | null
  >(null);

  // Busca as coleções ao carregar o componente
  useEffect(() => {
    const getCollections = async () => {
      const data = await fetchCollections();
      setCollections(data);
    };

    getCollections();
  }, []);

  // Busca as tasks da coleção selecionada
  const handleCollectionClick = async (collectionId: number) => {
    setSelectedCollectionId(collectionId); // Define a coleção selecionada
    const tasksData = await fetchTasksByCollectionId(collectionId);
    setTasks(tasksData); // Define as tasks para a coleção selecionada
  };

  const handleDeleteTask = async (taskId: number) => {
    await deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Minhas Coleções</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            <button onClick={() => handleCollectionClick(collection.id)}>
              {collection.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedCollectionId && (
        <div>
          <h2>Tarefas da Coleção</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => handleDeleteTask(task.id)}>
                  Deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollectionList;
