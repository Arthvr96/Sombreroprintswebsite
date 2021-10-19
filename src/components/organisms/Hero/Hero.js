import React from 'react';
import PropTypes from 'prop-types';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import ActionButton from 'components/molecues/ActionButton/ActionButton';
import { Wrapper } from './Hero.style';

const hero1Content = 'switch for movies';
const hero2Content = 'switch for music';

const Hero = ({ cmsData: { name, bgMobile, bgDesktop } }) => {
  return (
    <ViewTemplate>
      <Wrapper bgMobile={bgMobile} bgDesktop={bgDesktop}>
        <ActionButton
          rotateValue="150"
          content={name === 'hero1' ? hero1Content : hero2Content}
          isArrowLeftSide={name === 'hero2'}
        />
      </Wrapper>
    </ViewTemplate>
  );
};

export default Hero;

Hero.propTypes = {
  cmsData: PropTypes.objectOf(PropTypes.string),
};
