import React, { useEffect, useState } from "react";
import { fetchTasksByCollectionId } from "../services/api";
import { Task } from "../types/Task"; // Importe a interface de Task

interface TaskListProps {
  collectionId: number;
}

const TaskList: React.FC<TaskListProps> = ({ collectionId }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasksByCollectionId(collectionId);
      setTasks(data);
    };

    getTasks();
  }, [collectionId]);

  return (
    <div>
      <h2>Tarefas da Coleção</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "Concluída" : "Pendente"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
