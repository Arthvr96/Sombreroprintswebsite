import styled from 'styled-components';

export const WrapperView = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: ${({ width }) => width}px;
  transform: ${({ isOpen, width }) => (isOpen ? `translateX(${-width}px)` : 'translateX(0px)')};
  transition: transform 0.4s 2s ease-in;
  transition: ${({ isOpen }) =>
    isOpen ? 'transform 0.4s ease-in' : 'transform 0.4s 0.4s ease-in'};
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;
