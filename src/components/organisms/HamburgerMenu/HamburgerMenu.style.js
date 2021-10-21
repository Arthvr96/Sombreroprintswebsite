import styled from 'styled-components';

export const WrapperView = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: ${({ width }) => width}px;
  transform: ${({ isOpen, width }) => (isOpen ? `translateX(${-width}px)` : 'translateX(0px)')};
  transition: transform 0.3s ease-in;
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;
