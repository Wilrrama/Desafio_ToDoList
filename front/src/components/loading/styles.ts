import { styled } from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffcc00;
  font-size: 60px;
  animation: spin 1.5s linear infinite;
  border-radius: 8px;
  padding: 20px;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
