import styled from "@emotion/styled";

export const ModalElement = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 510;
`;

export const ModalContentElement = styled.div`
  background-color: #fff;
  padding: 16px;
  margin: 16px;
  max-width: 600px;
  min-width: 318px;
  width: 100%;
`;

export const ModalHeaderElement = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  
  > span {
    align-self: center;
    flex: 1;
  }
`;

export const CloseModalElement = styled.button`
  align-self: start;
  background: none;
  border: none;
`;
