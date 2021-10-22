import React, { useState, createContext, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { useNumberViews } from 'hooks/useNumberViews';
import PropTypes from 'prop-types';

export const ScrollStateContext = createContext({
  updateScrollPositionY: () => {},
  updateScrollPositionX: () => {},
  layerOneShiftValueY: '',
  layerTwoShiftValueY: '',
  shiftValueX: '',
  scrollPositionY: '',
  handleScrollNextPrev: () => {},
  handleScrollToSection: () => {},
});

const ScrollState = ({ children }) => {
  const { width, height } = useWindowSize();
  const { totalNumberOfViews, numberOfStyles } = useNumberViews();
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [scrollPositionX, setScrollPositionX] = useState(0);
  const [layerOneShiftValueY, setLayerOneShiftValueY] = useState(0);
  const [layerTwoShiftValueY, setLayerTwoShiftValueY] = useState(-height);
  const [shiftValueX, setShiftValueX] = useState(0);

  const updateScrollPositionY = (delta, DEADZONE) => {
    if (delta > DEADZONE && scrollPositionY <= totalNumberOfViews - 1) {
      setScrollPositionY(scrollPositionY + 1);
    } else if (delta < -DEADZONE && scrollPositionY > 0) {
      setScrollPositionY(scrollPositionY - 1);
    }
  };

  const updateScrollPositionX = (delta, DEADZONE) => {
    if (scrollPositionY < numberOfStyles + 1) {
      if (delta > DEADZONE && scrollPositionX !== 1) {
        setScrollPositionX(1);
      } else if (delta < -DEADZONE && scrollPositionX !== 0) {
        setScrollPositionX(0);
      }
    }
  };

  const handleScrollNextPrev = (direction) => {
    if (direction === 1) {
      updateScrollPositionY(1, 0);
    } else if (direction === -1) {
      updateScrollPositionY(-1, 0);
    }
  };

  const handleScrollToSection = ({ target, switchSide }) => {
    if (target > scrollPositionY) {
      if (scrollPositionY === 0) {
        setLayerOneShiftValueY(-height);
      }
      if (target >= numberOfStyles + 1) {
        setShiftValueX(-width / 2);
      }
      setScrollPositionY(target);
    } else if (target < scrollPositionY) {
      if (target === 0) {
        setLayerOneShiftValueY(0);
      }
      if (target < numberOfStyles + 1) {
        setShiftValueX(scrollPositionX * -width);
      }
      setScrollPositionY(target);
    }
    if (switchSide && switchSide - 1 !== scrollPositionX) {
      if (scrollPositionX === 0) {
        updateScrollPositionX(1, 0);
      } else {
        updateScrollPositionX(-1, 0);
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
    if (scrollPositionY > numberOfStyles) {
      setShiftValueX(-width / 2);
    }
    if (scrollPositionY === numberOfStyles) {
      setShiftValueX(scrollPositionX * -width);
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
        scrollPositionY,
        handleScrollToSection,
        handleScrollNextPrev,
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
