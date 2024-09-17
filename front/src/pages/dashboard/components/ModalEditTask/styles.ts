import styled from "styled-components";

export const StyledModalUpdateTask = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;

      input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #007bff;
          outline: none;
        }
      }

      .description {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 120px;
        resize: none;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #007bff;
          outline: none;
        }
      }

      span {
        color: red;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
`;
