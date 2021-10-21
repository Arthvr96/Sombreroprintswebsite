import styled, { css } from 'styled-components';

const mixInHamburgerLines = css`
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease-in-out;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: 0;

  div {
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background: transparent;

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme, isOpen }) =>
        isOpen ? theme.colors.black : theme.colors.white};
      transition: background-color 0.3s ease-in-out;

      &::before {
        top: -6px;
        transform: ${({ isOpen }) =>
          isOpen ? 'translateY(6px) rotate(45deg)' : 'translateY(0px) rotate(0deg)'};
        ${mixInHamburgerLines};
      }
      &::after {
        bottom: -6px;
        transform: ${({ isOpen }) =>
          isOpen ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)'};
        ${mixInHamburgerLines}
      }
    }
  }
`;
