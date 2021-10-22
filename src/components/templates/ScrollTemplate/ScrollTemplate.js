import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { ScrollStateContext } from 'providers/ScrollState/ScrollState';
import { useMobileScrollVertical } from 'hooks/useMobileScrollVertical';
import { useMobileScrollHorizontal } from 'hooks/useMobileScrollHorizontal';
import { useWheelScroll } from 'hooks/useWheelScroll';
import { StaticWrapper } from './ScrollTemplate.style';

const DEADZONES = {
  X_MOBILE: 100,
  Y_MOBILE: 50,
  Y_WHEEL: 0.15,
};

const ScrollTemplate = ({ children }) => {
  const { isOpenHamburger } = useContext(GlobalStateContext);
  const { updateScrollPositionY, updateScrollPositionX } = useContext(ScrollStateContext);
  const deltaMobileScrollVertical = useMobileScrollVertical();
  const deltaMobileScrollHorizontal = useMobileScrollHorizontal();
  const deltaWheelScroll = useWheelScroll();

  // Trigger update state of vertical scroll for mobile.
  useEffect(() => {
    if (!isOpenHamburger) {
      updateScrollPositionY(deltaMobileScrollVertical, DEADZONES.Y_MOBILE);
    }
  }, [deltaMobileScrollVertical]);

  // Trigger update state of vertical scroll for desktop.
  useEffect(() => {
    if (!isOpenHamburger) {
      updateScrollPositionY(deltaWheelScroll, DEADZONES.Y_WHEEL);
    }
  }, [deltaMobileScrollVertical]);

  // Trigger update state of horizontal scroll for mobile.
  useEffect(() => {
    if (!isOpenHamburger) {
      updateScrollPositionX(deltaMobileScrollHorizontal, DEADZONES.X_MOBILE);
    }
  }, [deltaMobileScrollHorizontal]);

  return (
    <>
      <StaticWrapper>{children}</StaticWrapper>
    </>
  );
};

export default ScrollTemplate;

ScrollTemplate.propTypes = {
  children: PropTypes.node,
};
