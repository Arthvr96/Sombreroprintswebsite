import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './HamburgerButton.styles';

const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <Button onClick={onClick} isOpen={isOpen}>
      <div>
        <span />
      </div>
    </Button>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
