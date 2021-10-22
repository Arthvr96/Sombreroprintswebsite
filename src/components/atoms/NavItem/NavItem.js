import styled from 'styled-components';

export const NavItem = styled.li`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.1s ease-in;

  &:active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
