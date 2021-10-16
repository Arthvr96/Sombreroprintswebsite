import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ size }) => size.width}px;
  height: ${({ size }) => size.height}px;
`;
