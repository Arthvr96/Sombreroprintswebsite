import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMobileScrollVertical } from 'hooks/useMobileScrollVertical';
import { useMobileScrollHorizontal } from 'hooks/useMobileScrollHorizontal';
import { useWheelScroll } from 'hooks/useWheelScroll';

const StaticWrapper = styled.div``;

const ScrollTemplate = ({ children }) => {
  const deltaMobileScrollVertical = useMobileScrollVertical();
  const deltaMobileScrollHorizontal = useMobileScrollHorizontal();
  const deltaWheelScroll = useWheelScroll();

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
