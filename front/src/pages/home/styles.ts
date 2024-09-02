import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  /* max-width: 1200px; */
  margin: 0 auto;

  img {
    max-width: 300px;
    height: auto;
    flex: 1;
    object-fit: contain;
  }

  div {
    flex: 1;
    max-width: 400px;
    text-align: center;
    background-color: #f4f4f9;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #ffcc00;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  h1 {
    font-size: 1.5rem;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
  }

  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  button {
    background-color: #ffcc00;
    color: #333;
    border: 2px solid transparent;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #333;
    color: #fff;
    border: 2px solid #ffcc00;
  }

  button:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    div {
      max-width: 100%;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.9rem;
      padding: 8px 15px;
    }

    .button-group {
      flex-direction: column;
      gap: 7px;
    }
  }
`;
