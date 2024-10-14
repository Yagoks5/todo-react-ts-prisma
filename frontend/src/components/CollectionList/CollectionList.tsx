// src/components/Collection/CollectionList.tsx
import React from "react";
import { useCollections } from "../../hooks/useCollection";
import {
  CollectionListContainer,
  Sidebar,
  Content,
} from "./CollectionListStyled";

const CollectionList: React.FC = () => {
  const {
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
  } = useCollections();

  return (
    <CollectionListContainer>
      <Sidebar>
        <h1>Coleções</h1>
        <ul>
          {collections.map((collection) => (
            <li
              key={collection.id}
              onClick={() => setSelectedCollectionId(collection.id)}
              className={selectedCollectionId === collection.id ? "active" : ""}
            >
              {collection.name}
            </li>
          ))}
        </ul>

        <div className="create-collection">
          <input
            type="text"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
            placeholder="Nova Coleção"
          />
          <button onClick={handleCreateCollection}>Criar Coleção</button>
        </div>
      </Sidebar>

      <Content>
        {selectedCollectionId && (
          <div>
            <h2>Tarefas da Coleção {selectedCollectionId}</h2>
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  {task.title}
                  <button onClick={() => handleDeleteTask(task.id)}>
                    Deletar
                  </button>
                </li>
              ))}
            </ul>

            <form onSubmit={handleCreateTask}>
              <input
                type="text"
                placeholder="Nova tarefa"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <button type="submit">Criar Tarefa</button>
            </form>
          </div>
        )}
      </Content>
    </CollectionListContainer>
  );
};

export default CollectionList;
