import styled from "styled-components";

export const StyledLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
  min-height: 70vh;

  .form__container {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);

    h1 {
      font-size: 2rem;
      color: #fff;
      margin-bottom: 10px;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      color: #999;
      margin-bottom: 10px;
      text-align: center;
    }

    span {
      color: #ffcc00;
    }

    .input__container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 20px;

      input {
        padding: 12px;
        font-size: 1rem;
        background-color: #fff;
        color: #333;
        border: 2px solid #ccc;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        width: 100%;

        &:focus {
          border-color: #ffcc00;
          box-shadow: 0 0 5px rgba(255, 204, 0, 0.5);
        }
      }
    }

    .button__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;

      button {
        width: 100%;
        min-width: 250px;
        padding: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        background-color: #ffcc00;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:hover {
          background-color: #333;
          transform: scale(1.05);
        }
      }
    }
  }

  .image__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .form__container {
      width: 90%;
      max-width: 500px;
    }

    .image__container {
      width: 90%;
      max-width: 400px;
    }
  }

  @media (max-width: 480px) {
    .form__container {
      width: 100%;
      padding: 15px;
    }
  }
`;
