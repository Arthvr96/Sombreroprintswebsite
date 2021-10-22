import styled from 'styled-components';

export const PositionWrapper = styled.div`
  position: fixed;
  z-index: 300;
  width: 33px;
  height: 33px;
  top: ${({ position }) => position.top}rem;
  right: 1.5rem;
`;
