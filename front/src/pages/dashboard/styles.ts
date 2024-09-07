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
