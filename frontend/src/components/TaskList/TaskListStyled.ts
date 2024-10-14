import styled from "styled-components";

export const TaskListContainer = styled.div`
  margin-top: 20px;
  background-color: #000000;
`;

export const TaskItem = styled.li<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha verticalmente os itens */
  padding: 10px; /* Espaçamento interno */
  margin: 10px 0; /* Espaçamento entre as tarefas */
  border: 1px solid #e0e0e0; /* Borda para cada tarefa */
  border-radius: 4px; /* Cantos arredondados */
  background-color: ${({ completed }) =>
    completed ? "#e0f7fa" : "#fff"}; /* Cor de fundo dependendo do status */
  transition: background-color 0.3s ease; /* Transição suave para a cor de fundo */

  &:hover {
    background-color: ${({ completed }) =>
      completed ? "#b2ebf2" : "#f5f5f5"}; /* Efeito de hover */
    cursor: pointer; /* Cursor em forma de ponteiro */
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336; /* Cor vermelha para o botão de deletar */
  color: white; /* Texto branco */
  border: none; /* Remove bordas */
  border-radius: 4px; /* Cantos arredondados */
  padding: 5px 10px; /* Espaçamento interno */
  cursor: pointer; /* Cursor em forma de ponteiro */
  transition: background-color 0.3s ease; /* Transição suave */

  &:hover {
    background-color: #d32f2f; /* Cor mais escura ao passar o mouse */
  }
`;
