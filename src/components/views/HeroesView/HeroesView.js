import React from 'react';
import HeroTesting from 'components/organisms/HeroTesting/HeroTesting';
import { Wrapper } from './HeroesView.style';

const HeroesView = () => {
  return (
    <Wrapper>
      <HeroTesting bgColor="red" name="Hero1" />
      <HeroTesting bgColor="green" name="Hero2" />
    </Wrapper>
  );
};

export default HeroesView;
