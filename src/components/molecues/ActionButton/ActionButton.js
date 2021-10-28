import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ActionButton.style';

const ActionButton = ({ content, ...props }) => {
  return (
    <Button {...props} isContent={content}>
      {content}
    </Button>
  );
};

export default ActionButton;

ActionButton.propTypes = {
  isReverseColors: PropTypes.bool,
  isArrowLeftSide: PropTypes.bool,
  content: PropTypes.string,
  rotateValue: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  disabledArrow: PropTypes.bool,
  disabled: PropTypes.bool,
};
