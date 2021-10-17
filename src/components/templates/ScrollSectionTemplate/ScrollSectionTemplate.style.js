import styled from 'styled-components';

export const ScrollSection = styled.div`
  position: relative;
  z-index: ${({ isFirst }) => (isFirst ? '200' : '100')};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  transform: ${({ scrollBy }) => `translate(0px, ${scrollBy}px)`};
  transition: transform 0.4s ease-in;
`;
