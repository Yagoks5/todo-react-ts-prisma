import styled from "styled-components";

export const TaskListContainer = styled.div`
  margin-top: 20px;
  background-color: #ffffff; /* Cor de fundo da lista de tarefas */
  border-radius: 4px; /* Cantos arredondados */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave */
  padding: 20px; /* Espaçamento interno */

  h2 {
    margin-bottom: 20px; /* Margem abaixo do título */
  }

  form {
    display: flex; /* Flexbox para alinhar input e botão */
    margin-top: 20px; /* Margem acima do formulário */

    input {
      flex: 1; /* Ocupa todo o espaço disponível */
      padding: 10px; /* Espaçamento interno do input */
      border: 1px solid #ccc; /* Borda leve */
      border-radius: 4px; /* Cantos arredondados */
      margin-right: 10px; /* Margem à direita do input */
    }

    button {
      padding: 10px 15px; /* Espaçamento interno do botão */
      background-color: #3498db; /* Cor do botão */
      color: white; /* Texto branco */
      border: none; /* Remove borda */
      border-radius: 4px; /* Cantos arredondados */
      cursor: pointer; /* Cursor em forma de ponteiro */
      transition: background-color 0.3s ease; /* Transição suave */

      &:hover {
        background-color: #2980b9; /* Cor mais escura ao passar o mouse */
      }
    }
  }
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
