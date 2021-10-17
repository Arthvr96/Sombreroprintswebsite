import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useMobileScrollVertical } from 'hooks/useMobileScrollVertical';
import { useMobileScrollHorizontal } from 'hooks/useMobileScrollHorizontal';
import { useWheelScroll } from 'hooks/useWheelScroll';
import { StaticWrapper } from './ScrollTemplate.style';

const ScrollTemplate = ({ children }) => {
  const { scrollPos, setScrollPos } = useContext(GlobalStateContext);
  const deltaMobileScrollVertical = useMobileScrollVertical();
  const deltaMobileScrollHorizontal = useMobileScrollHorizontal();
  const deltaWheelScroll = useWheelScroll();
  const DEADZONE_Y = 50;
  const numberOfViews = 7;

  useEffect(() => {
    if (deltaMobileScrollVertical > DEADZONE_Y && scrollPos < numberOfViews) {
      setScrollPos(scrollPos + 1);
    } else if (deltaMobileScrollVertical < -DEADZONE_Y && scrollPos !== 0) {
      setScrollPos(scrollPos - 1);
    }
  }, [deltaMobileScrollVertical]);

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
