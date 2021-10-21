import styled from 'styled-components';

export const ScrollSection = styled.div`
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  transform: ${({ shiftValueX, shiftValueY }) => `translate(${shiftValueX}px, ${shiftValueY}px)`};
  transition: transform 0.4s ease-in;
`;
