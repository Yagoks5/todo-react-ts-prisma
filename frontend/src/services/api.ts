import axios from "axios";

const API_URL = "http://localhost:7001/collections/";

export const fetchCollections = async () => {
  const response = await axios.get(API_URL);
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
