import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #34495e;
    }

    &.active {
      background-color: #16a085;
    }
  }

  .create-collection {
    margin-top: 20px;

    input {
      width: 80%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      margin-bottom: 10px;
      margin-right: 10px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #27ae60;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #219150;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f44336; // Cor do ícone de lixeira
  cursor: pointer;
  padding: 0;
  margin-left: 10px; // Para separar do texto
  transition: color 0.2s ease;

  &:hover {
    color: #d32f2f; // Cor ao passar o mouse
  }

  &:focus {
    outline: none; // Remove contorno ao focar
  }

  svg {
    width: 20px; // Tamanho do ícone
    height: 20px; // Tamanho do ícone
  }
`;
