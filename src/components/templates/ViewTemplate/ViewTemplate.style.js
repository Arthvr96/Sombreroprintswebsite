import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ windowSize }) => windowSize.width}px;
  height: ${({ windowSize }) => windowSize.height}px;
`;
