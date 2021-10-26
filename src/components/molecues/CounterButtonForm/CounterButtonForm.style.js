import styled from 'styled-components';

export const CounterButton = styled.div`
  display: flex;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  padding: 0.5rem 0;

  button {
    width: 30%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  input {
    width: 40%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    text-align: center;
  }
`;
