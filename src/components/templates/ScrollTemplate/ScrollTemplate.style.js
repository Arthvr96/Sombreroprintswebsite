import styled from 'styled-components';

export const StaticWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  touch-action: none;
`;
