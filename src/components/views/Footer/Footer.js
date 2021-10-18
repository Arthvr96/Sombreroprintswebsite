import React, { useContext } from 'react';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import styled from 'styled-components';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';

const FooterWrapper = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Footer = () => {
  const { scrollPosY } = useContext(GlobalStateContext);
  return (
    <FooterWrapper>
      <ViewTemplate>
        <Wrapper isVisible={scrollPosY > 6}>
          <h2>Footer</h2>
        </Wrapper>
      </ViewTemplate>
    </FooterWrapper>
  );
};

export default Footer;
