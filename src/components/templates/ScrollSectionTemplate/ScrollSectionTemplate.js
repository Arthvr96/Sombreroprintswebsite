import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollStateContext } from 'providers/ScrollState/ScrollState';
import { ScrollSection } from './ScrollSectionTemplate.style';

const ScrollSectionTemplate = ({ children, layerNumber }) => {
  const { layerOneShiftValueY, layerTwoShiftValueY, shiftValueX } = useContext(ScrollStateContext);

  return (
    <ScrollSection
      zIndex={layerNumber === 1 ? '200' : '100'}
      shiftValueY={layerNumber === 1 ? layerOneShiftValueY : layerTwoShiftValueY}
      shiftValueX={shiftValueX}
    >
      {children}
    </ScrollSection>
  );
};

export default ScrollSectionTemplate;

ScrollSectionTemplate.propTypes = {
  children: PropTypes.node,
  layerNumber: PropTypes.number,
};
