import styled from 'styled-components';
import logo from 'assets/logo.svg';

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  background-color: transparent;
  border: 0;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-indent: 3rem;

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    display: block;
    width: 2.5rem;
    height: 1.9rem;
    background: url(${logo}) no-repeat;
    background-size: cover;
  }
`;
