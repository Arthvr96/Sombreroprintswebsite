import styled from 'styled-components';
import media from 'helpers/media';

export const CounterButton = styled.div`
  display: flex;
  width: 45%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  padding: 0.5rem 0;

  ${media.mobile`
    width: 50%;
    padding: 0.5rem 0;
  `}

  button {
    width: 30%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${media.mobile`
     font-size: ${({ theme }) => theme.fontSize.m};
  `}
  }

  input {
    width: 40%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    text-transform: uppercase;
    text-align: center;

    ${media.mobile`
     font-size: ${({ theme }) => theme.fontSize.xs};
  `}
  }
`;
