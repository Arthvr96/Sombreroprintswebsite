import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ActionButton.style';

const ActionButton = ({
  isReverseColors,
  content,
  rotateValue,
  isArrowLeftSide,
  onClick,
  ariaLabel,
  type,
  disabledArrow,
}) => {
  return (
    <Button
      isReverseColors={isReverseColors}
      isContent={content}
      rotateValue={rotateValue}
      isArrowLeftSide={isArrowLeftSide}
      onClick={onClick}
      ariaLabel={ariaLabel}
      type={type}
      disabledArrow={disabledArrow}
    >
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
};
