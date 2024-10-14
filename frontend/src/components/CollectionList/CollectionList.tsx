import React, { useState } from "react";
import { useCollections } from "../../hooks/useCollection";
import TaskList from "../TaskList/TaskList";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  AppContainer,
  Sidebar,
  Content,
  DeleteButton,
} from "./CollectionListStyled";

const CollectionList: React.FC = () => {
  const {
    collections,
    newCollectionName,
    setNewCollectionName,
    handleCreateCollection,
    handleDeleteCollection,
  } = useCollections();
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    number | null
  >(null);

  return (
    <AppContainer>
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
              <DeleteButton>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCollection(collection.id);
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </DeleteButton>
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
          <TaskList collectionId={selectedCollectionId} />
        )}
      </Content>
    </AppContainer>
  );
};

export default CollectionList;
