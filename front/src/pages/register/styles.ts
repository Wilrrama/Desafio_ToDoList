import styled from "styled-components";

export const StyledRegister = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    margin-top: 30px;
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  h3:hover {
    color: #ffcc00;
  }

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #999;
    margin-bottom: 30px;
    text-align: left;
  }

  span {
    font-size: 0.875rem;
    color: #ffcc00;
    margin-top: 4px;
    text-align: left;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    .input-row {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;
      width: 100%;

      /* Garantir que cada input ocupe o mesmo espaço */
      .input-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }

    input {
      padding: 12px;
      font-size: 1rem;
      background-color: #fff;
      color: #333;
      border: 2px solid #ccc;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      box-sizing: border-box;
      width: 100%;
    }

    input:focus {
      border-color: #ffcc00;
      box-shadow: 0 0 5px rgba(255, 204, 0, 0.5);
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      padding: 12px;
      font-size: 1.2rem;
      font-weight: bold;
      color: #fff;
      background-color: #ffcc00;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      width: 100%;
      box-sizing: border-box;
    }

    button:hover {
      background-color: #333;
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    align-items: center;

    h1,
    p {
      text-align: center;
    }

    .input-row {
      flex-direction: column;
      gap: 10px;
    }

    input {
      width: 100%;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 100%;
      }
    }
  }
`;
