import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: end;
  background: linear-gradient(
    to right,
    rgba(251, 188, 36, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(251, 188, 36, 0.8)
  );
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h1 {
    color: #fff;
    margin: 0;
    font-size: 2rem;
  }

  img {
    height: 80px;
    object-fit: contain;
    margin-top: 10px;
  }
`;
