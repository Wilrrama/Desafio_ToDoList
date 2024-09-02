import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;

  background: linear-gradient(
    to right,
    rgba(251, 188, 36, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(251, 188, 36, 0.8)
  );
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  p {
    display: flex;
    gap: 5px;
    color: #fff;
    font-weight: 500;
    margin: 0;
    font-size: 1rem;
    a {
      &:hover {
        color: #3333ff;
        transform: scale(1.2);
        transition: color 0.3s ease, transform 0.3s ease;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 530px) {
    align-items: center;
    flex-direction: column;
  }
`;
