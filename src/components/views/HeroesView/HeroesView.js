import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import { heroData } from 'backend/cmsData';
import { Wrapper } from './HeroesView.style';

const HeroesView = () => {
  return (
    <Wrapper>
      {heroData.map((heroInfo) => (
        <Hero cmsData={heroInfo} key={heroInfo.name} />
      ))}
    </Wrapper>
  );
};

export default HeroesView;
