import styled from 'styled-components';

export const ScrollSection = styled.div`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  transform: ${({ shiftValueX, shiftValueY }) => `translate(${shiftValueX}px, ${shiftValueY}px)`};
  transition: transform 0.3s ease-in;
  transition: ${({ slideTime }) => `transform ${slideTime}s ease-in`};
  background-color: ${({ theme }) => theme.colors.primary};
`;
