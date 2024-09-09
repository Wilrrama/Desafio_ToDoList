import styled from "styled-components";

export const StyledModalUpdateUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    width: 100%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-row {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      width: 100%;
    }

    span {
      color: #ff0000;
      font-size: 0.875rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .button-container button {
    background-color: #fbbc36;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffcc00;
    }
  }
`;
