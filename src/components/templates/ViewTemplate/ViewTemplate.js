import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useWindowSize';
import { Wrapper } from './ViewTemplate.style';

const ViewTemplate = ({ children }) => {
  return <Wrapper size={useWindowSize()}>{children}</Wrapper>;
};

export default ViewTemplate;

ViewTemplate.propTypes = {
  children: PropTypes.node,
};
