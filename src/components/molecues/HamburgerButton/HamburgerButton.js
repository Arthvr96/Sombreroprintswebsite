import styled, { css } from 'styled-components';

const mixInHamburgerLines = css`
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const HamburgerButton = styled.button`
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
      background: ${({ theme }) => theme.colors.white};

      &::before {
        top: -6px;
        ${mixInHamburgerLines}
      }
      &::after {
        bottom: -6px;
        ${mixInHamburgerLines}
      }
    }
  }
`;
