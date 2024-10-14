import React, { useEffect, useState } from "react";
import { fetchTasksByCollectionId } from "../../services/api";
import { Task } from "../../types/Task";
import { TaskListContainer, TaskItem, DeleteButton } from "./TaskListStyled";

interface TaskListProps {
  collectionId: number;
  onDeleteTask: (taskId: number) => void; // Callback para deletar tarefa
}

const TaskList: React.FC<TaskListProps> = ({ collectionId, onDeleteTask }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasksByCollectionId(collectionId);
      setTasks(data);
    };

    getTasks();
  }, [collectionId]);

  return (
    <TaskListContainer>
      <h2>Tarefas da Coleção</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} completed={task.completed}>
            {task.title}
            <DeleteButton onClick={() => onDeleteTask(task.id)}>
              Deletarssssss
            </DeleteButton>
          </TaskItem>
        ))}
      </ul>
    </TaskListContainer>
  );
};

export default TaskList;
