import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useMobileScrollVertical } from 'hooks/useMobileScrollVertical';
import { useMobileScrollHorizontal } from 'hooks/useMobileScrollHorizontal';
import { useWheelScroll } from 'hooks/useWheelScroll';
import { StaticWrapper } from './ScrollTemplate.style';

const ScrollTemplate = ({ children }) => {
  const { scrollPosY, setScrollPosY, scrollPosX, setScrollPosX } = useContext(GlobalStateContext);
  const deltaMobileScrollVertical = useMobileScrollVertical();
  const deltaMobileScrollHorizontal = useMobileScrollHorizontal();
  const deltaWheelScroll = useWheelScroll();
  const DEADZONE_X = 100;
  const DEADZONE_Y = 50;
  const DEADZONE_Y_WHEEL = 0.15;
  const numberOfViews = 8;

  useEffect(() => {
    if (deltaMobileScrollVertical > DEADZONE_Y && scrollPosY < numberOfViews) {
      setScrollPosY(scrollPosY + 1);
    } else if (deltaMobileScrollVertical < -DEADZONE_Y && scrollPosY !== 0) {
      setScrollPosY(scrollPosY - 1);
    }
  }, [deltaMobileScrollVertical]);

  useEffect(() => {
    if (deltaMobileScrollHorizontal > DEADZONE_X && scrollPosX < 1) {
      setScrollPosX(1);
    } else if (deltaMobileScrollHorizontal < -DEADZONE_X && scrollPosX > 0) {
      setScrollPosX(0);
    }
  }, [deltaMobileScrollHorizontal]);

  useEffect(() => {
    if (deltaWheelScroll > DEADZONE_Y_WHEEL && scrollPosY < numberOfViews) {
      setScrollPosY(scrollPosY + 1);
    } else if (deltaWheelScroll < -DEADZONE_Y_WHEEL && scrollPosY !== 0) {
      setScrollPosY(scrollPosY - 1);
    }
  }, [deltaWheelScroll]);

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
