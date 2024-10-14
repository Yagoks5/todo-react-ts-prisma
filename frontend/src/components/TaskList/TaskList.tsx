import React from "react";
import { useTasks } from "../../hooks/useTask";
import { TaskListContainer, TaskItem, DeleteButton } from "./TaskListStyled";

interface TaskListProps {
  collectionId: number | null; // Permite que collectionId seja null
}

const TaskList: React.FC<TaskListProps> = ({ collectionId }) => {
  const {
    tasks,
    newTaskTitle,
    setNewTaskTitle,
    handleCreateTask,
    handleDeleteTask,
  } = useTasks(collectionId);

  return (
    <TaskListContainer>
      <h2>Tarefas da Coleção</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} completed={task.completed}>
            {task.title}
            <DeleteButton onClick={() => handleDeleteTask(task.id)}>
              Deletar
            </DeleteButton>
          </TaskItem>
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
    </TaskListContainer>
  );
};

export default TaskList;
