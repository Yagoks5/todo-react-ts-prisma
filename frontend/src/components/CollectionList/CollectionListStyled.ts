// src/components/Collection/CollectionList.styled.ts
import styled from "styled-components";

export const CollectionListContainer = styled.div`
  display: flex;
  height: 100vh; /* Ocupa toda a altura da tela */
`;

export const Sidebar = styled.div`
  width: 250px; /* Largura fixa para a sidebar */
  background-color: #f0f0f0; /* Cor de fundo da sidebar */
  padding: 20px; /* Espaçamento interno */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra para a sidebar */

  h1 {
    font-size: 24px;
    margin-bottom: 20px; /* Espaçamento abaixo do título */
  }

  ul {
    list-style: none; /* Remove marcadores de lista */
    padding: 0; /* Remove padding padrão */
    margin: 0; /* Remove margin padrão */

    li {
      padding: 10px 15px; /* Espaçamento interno dos itens */
      cursor: pointer; /* Cursor em forma de ponteiro ao passar o mouse */
      &:hover {
        background-color: #d9d9d9; /* Cor de fundo ao passar o mouse */
      }
      &.active {
        background-color: #b0c4de; /* Cor de fundo para o item ativo */
      }
    }
  }

  .create-collection {
    margin-top: 20px; /* Espaçamento acima do formulário */
    input {
      width: calc(100% - 20px); /* Largura total menos espaçamento */
      padding: 10px; /* Espaçamento interno do input */
      margin-bottom: 10px; /* Espaçamento abaixo do input */
      border: 1px solid #ccc; /* Bordas do input */
      border-radius: 4px; /* Cantos arredondados do input */
    }

    button {
      padding: 10px 15px; /* Espaçamento interno do botão */
      background-color: #4caf50; /* Cor de fundo do botão */
      color: white; /* Cor do texto do botão */
      border: none; /* Remove bordas do botão */
      border-radius: 4px; /* Cantos arredondados do botão */
      cursor: pointer; /* Cursor em forma de ponteiro ao passar o mouse */
      &:hover {
        background-color: #45a049; /* Cor ao passar o mouse no botão */
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1; /* Ocupa o restante da largura disponível */
  padding: 20px; /* Espaçamento interno */
  background-color: #ffffff; /* Cor de fundo do conteúdo */
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */

  h2 {
    margin-bottom: 20px; /* Espaçamento abaixo do título */
  }

  .task-item {
    display: flex; /* Flexbox para alinhamento */
    justify-content: space-between; /* Espaçamento entre título e botão */
    align-items: center; /* Alinhamento vertical */
    padding: 10px; /* Espaçamento interno */
    border: 1px solid #e0e0e0; /* Bordas para as tarefas */
    border-radius: 4px; /* Cantos arredondados */
    margin-bottom: 10px; /* Espaçamento abaixo de cada tarefa */
  }

  form {
    display: flex; /* Flexbox para o formulário */
    gap: 10px; /* Espaçamento entre input e botão */
    margin-top: 20px; /* Espaçamento acima do formulário */
  }
`;
