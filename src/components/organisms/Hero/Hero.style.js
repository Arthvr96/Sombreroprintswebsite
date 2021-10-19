import styled from 'styled-components';
import media from 'helpers/media';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(${({ bgMobile }) => bgMobile}) no-repeat center;
  background-size: cover;

  ${media.desktop`
  background: url(${({ bgDesktop }) => bgDesktop}) no-repeat center;
  `}
`;
