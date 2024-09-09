import styled from "styled-components";

export const NavbarUser = styled.div`
  background-color: #333;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .user__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;

    .user__info {
      display: flex;
      gap: 15px;
    }

    img {
      width: 70px;
    }

    .text__container {
      display: flex;
      flex-direction: column;
      gap: 15px;

      h1 {
        text-align: center;
        font-size: 1.5rem;
        color: #fbbc36;
      }

      h3 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: normal;
        color: #fff;
      }
    }

    .button__container {
      display: flex;
      gap: 15px;
    }

    .btn__logout {
      &:hover {
        background-color: #ff0000;
      }
    }

    button {
      width: 80px;
      padding: 10px 20px;
      background-color: #fbbc36;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #ffcc00;
      }
    }
  }
  @media (max-width: 525px) {
    .button__container {
      flex-direction: column;
    }
  }
  @media (max-width: 427px) {
    .text__container {
      h1 {
        font-size: 15px;
      }

      h3 {
        font-size: 0.8rem;
        color: #fff;
      }
    }
  }
`;

export const TasksContainer = styled.section`
  display: flex;
  justify-content: center; /* Alinha os cards no centro */
  padding: 20px;
  width: 100%; /* O container ocupa toda a largura */
  box-sizing: border-box;

  h1 {
    text-align: center;
    padding: 10px;
    color: #fff;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  li {
    max-width: 400px; /* Define um tamanho máximo para os cards */
    width: 100%; /* Os cards ocupam 100% da largura até o limite definido */
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 18px;
    color: #444;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  .button__container {
    display: flex;
    padding: 10px;
    justify-content: center;
    gap: 10px;
  }
  button {
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ddd;
    }
  }

  button:first-of-type {
    background-color: #4caf50;
    color: white;
  }

  button:last-of-type {
    background-color: #f44336;
    color: white;
  }
`;
