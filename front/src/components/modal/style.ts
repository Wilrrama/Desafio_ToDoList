import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
`;

export const CloseButton = styled.button`
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background: #cc0000;
  }
`;
