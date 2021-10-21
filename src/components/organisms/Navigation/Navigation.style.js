import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 1rem 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
