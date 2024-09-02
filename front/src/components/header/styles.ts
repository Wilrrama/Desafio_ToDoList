import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(251, 188, 36, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(251, 188, 36, 0.8)
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h1 {
    color: #fff;
    margin: 0;
    font-size: 2rem;
  }

  img {
    height: 70px;
    object-fit: contain;
  }
`;
