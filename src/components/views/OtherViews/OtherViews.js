import React from 'react';
import HeroTesting from 'components/organisms/HeroTesting/HeroTesting';
import styled from 'styled-components';
import { useWindowSize } from 'hooks/useWindowSize';

const Wrapper = styled.div`
  transform: ${({ moveBy }) => `translateX(${moveBy}px)`};
`;

const OtherViews = () => {
  const { width } = useWindowSize();

  const content = `In et culpa nisi pariatur do nisi amet. Cillum eu quis in sit reprehenderit laborum eu anim commodo adipisicing veniam. Occaecat eiusmod et velit adipisicing ad consequat. Voluptate quis Lorem ex nisi eu adipisicing elit eiusmod pariatur laborum aute magna. Voluptate proident consequat sint dolor aliqua commodo. Laboris qui proident ipsum Lorem tempor ullamco laboris.`;
  return (
    <Wrapper moveBy={width / 2}>
      <HeroTesting bgColor="#2C2F37" name="Posters" content={content} />
      <HeroTesting bgColor="#2C2F37" name="About Posters" content={content} />
      <HeroTesting bgColor="#2C2F37" name="Shipping" content={content} />
      <HeroTesting bgColor="#2C2F37" name="Faq" content={content} />
    </Wrapper>
  );
};

export default OtherViews;
