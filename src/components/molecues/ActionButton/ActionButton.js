import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ActionButton.style';

const ActionButton = ({ isReverseColors, content, rotateValue, isArrowLeftSide }) => {
  return (
    <Button
      isReverseColors={isReverseColors}
      isContent={content}
      rotateValue={rotateValue}
      isArrowLeftSide={isArrowLeftSide}
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
};
