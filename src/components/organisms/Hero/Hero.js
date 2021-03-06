import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollStateContext } from 'providers/ScrollState/ScrollState';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import ActionButton from 'components/molecues/ActionButton/ActionButton';
import { Wrapper } from './Hero.style';

const hero1Content = 'switch for movies';
const hero2Content = 'switch for music';

const Hero = ({ cmsData: { name, bgMobile, bgDesktop } }) => {
  const { handleScrollToSection } = useContext(ScrollStateContext);
  return (
    <ViewTemplate>
      <Wrapper bgMobile={bgMobile} bgDesktop={bgDesktop}>
        <ActionButton
          rotateValue="150"
          content={name === 'hero1' ? hero1Content : hero2Content}
          isArrowLeftSide={name === 'hero2'}
          onClick={
            name === 'hero1'
              ? () => handleScrollToSection({ target: 0, switchSide: 2 })
              : () => handleScrollToSection({ target: 0, switchSide: 1 })
          }
        />
      </Wrapper>
    </ViewTemplate>
  );
};

export default Hero;

Hero.propTypes = {
  cmsData: PropTypes.objectOf(PropTypes.string),
};
