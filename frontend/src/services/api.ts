import axios from "axios";

const API_URL = "http://localhost:7001/collections/";

export const fetchCollections = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCollection = async (name: string) => {
  const response = await axios.post("http://localhost:7001/collections", {
    name,
  });
  return response.data;
};

export const deleteCollection = async (collectionId: number) => {
  await axios.delete(`http://localhost:7001/collections/${collectionId}`);
};

export const createTask = async (title: string, collectionId: number) => {
  const response = await axios.post(`http://localhost:7001/tasks`, {
    title,
    collectionId,
  });
  return response.data;
};

export const fetchTasksByCollectionId = async (collectionId: number) => {
  const response = await axios.get(
    `http://localhost:7001/tasks/collection/${collectionId}`
  );
  return response.data;
};

export const deleteTask = async (taskId: number) => {
  await axios.delete(`http://localhost:7001/tasks/task/${taskId}`);
};
//http://localhost:7001/tasks/task/1
