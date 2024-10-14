import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh; /* Altura total da tela */
  background-color: #f4f4f4; /* Cor de fundo da aplicação */
`;

export const Sidebar = styled.div`
  width: 250px; /* Largura fixa da sidebar */
  background-color: #2c3e50; /* Cor de fundo da sidebar */
  color: white; /* Texto branco */
  padding: 20px; /* Espaçamento interno */
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 20px; /* Margem abaixo do título */
    font-size: 1.5rem; /* Tamanho do texto */
  }

  ul {
    list-style: none; /* Remove marcadores */
    padding: 0; /* Remove padding padrão */
  }

  li {
    padding: 10px; /* Espaçamento interno das coleções */
    cursor: pointer; /* Cursor em forma de ponteiro */
    transition: background-color 0.3s ease; /* Transição suave para hover */

    &:hover {
      background-color: #34495e; /* Cor de fundo ao passar o mouse */
    }

    &.active {
      background-color: #16a085; /* Cor de fundo para a coleção ativa */
    }
  }

  .create-collection {
    margin-top: 20px; /* Margem acima do formulário */

    input {
      width: 80%; /* Defina uma largura menor para o input */
      padding: 10px; /* Espaçamento interno do input */
      border: none; /* Remove borda */
      border-radius: 4px; /* Cantos arredondados */
      margin-bottom: 10px; /* Margem abaixo do input */
      margin-right: 10px; /* Margem à direita do input para afastá-lo da sidebar */
    }

    button {
      width: 100%; /* Largura total do botão */
      padding: 10px; /* Espaçamento interno do botão */
      background-color: #27ae60; /* Cor do botão */
      color: white; /* Texto branco */
      border: none; /* Remove borda */
      border-radius: 4px; /* Cantos arredondados */
      cursor: pointer; /* Cursor em forma de ponteiro */
      transition: background-color 0.3s ease; /* Transição suave */

      &:hover {
        background-color: #219150; /* Cor mais escura ao passar o mouse */
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1; /* Preenche o espaço restante */
  padding: 20px; /* Espaçamento interno */
`;
