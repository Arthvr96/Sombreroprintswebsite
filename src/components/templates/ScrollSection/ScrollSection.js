import styled from 'styled-components';

export const ScrollSection = styled.div`
  display: flex;
  flex-direction: ${({ isColumns }) => (isColumns ? 'column' : 'row')};
  width: fit-content;
  height: fit-content;
`;
