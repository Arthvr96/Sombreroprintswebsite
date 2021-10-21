import React, { useState, createContext, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import PropTypes from 'prop-types';

export const ScrollStateContext = createContext({
  updateScrollPositionY: () => {},
  updateScrollPositionX: () => {},
  layerOneShiftValueY: '',
  layerTwoShiftValueY: '',
  shiftValueX: '',
});

const NUMBER_OF_VIEWS = 8;
const NUMBER_OF_STYLES = 4;

const ScrollState = ({ children }) => {
  const { width, height } = useWindowSize();
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);
  const [layerOneShiftValueY, setLayerOneShiftValueY] = useState(0);
  const [layerTwoShiftValueY, setLayerTwoShiftValueY] = useState(-height);
  const [shiftValueX, setShiftValueX] = useState(0);

  const updateScrollPositionY = (delta, DEADZONE) => {
    if (delta > DEADZONE && scrollPositionY <= NUMBER_OF_VIEWS - 1) {
      setScrollPositionY(scrollPositionY + 1);
    } else if (delta < -DEADZONE && scrollPositionY > 0) {
      setScrollPositionY(scrollPositionY - 1);
    }
  };

  const updateScrollPositionX = (delta, DEADZONE) => {
    if (scrollPositionY < NUMBER_OF_STYLES + 1) {
      if (delta > DEADZONE && scrollPositionX !== 1) {
        setScrollPositionX(1);
      } else if (delta < -DEADZONE && scrollPositionX !== 0) {
        setScrollPositionX(0);
      }
    }
  };

  // Trigger update value of vertical shift for layer one and two. (layer1 is heroSection, layer2 are rest of website except last fixed section)
  // Layer2 have delayed update of vertical shift for paralax efect. Init state has the appropriate correction.
  useEffect(() => {
    if (scrollPositionY === 0) {
      setLayerOneShiftValueY(0);
    } else if (scrollPositionY === 1) {
      setLayerOneShiftValueY(-height);
    }
    if (scrollPositionY > 0) {
      setLayerTwoShiftValueY(scrollPositionY * -height);
    }
  }, [scrollPositionY]);

  // Trigger update value of horizontal shift for section with double views.
  useEffect(() => {
    setShiftValueX(scrollPositionX * -width);
  }, [scrollPositionX]);

  // Triger update value of horizontal shift for section with a single counts of views.
  useEffect(() => {
    if (scrollPositionY > NUMBER_OF_STYLES) {
      setShiftValueX(-width / 2);
    }
    if (scrollPositionY === NUMBER_OF_STYLES) {
      setShiftValueX(-width * scrollPositionX);
    }
  }, [scrollPositionY]);

  return (
    <ScrollStateContext.Provider
      value={{
        updateScrollPositionY,
        updateScrollPositionX,
        layerOneShiftValueY,
        layerTwoShiftValueY,
        shiftValueX,
      }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
};

export default ScrollState;

ScrollState.propTypes = {
  children: PropTypes.node,
};
