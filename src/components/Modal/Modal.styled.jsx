import styled from 'styled-components';

export const Overlay = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  /* position: absolute;
 
  top: 0;
  left: 0; 
  transform: translate(50%, 50%);  */
  /* background-color: rgb(255, 255, 255); */
  max-width: 80%;
  max-height: 80%;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
