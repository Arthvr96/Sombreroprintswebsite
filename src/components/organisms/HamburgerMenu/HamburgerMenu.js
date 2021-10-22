import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useWindowSize';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import NavList from 'components/molecues/NavList/NavList';
import { WrapperView, WrapperContent } from './HamburgerMenu.style';

const HamburgerMenu = ({ isOpen }) => {
  const { width } = useWindowSize();

  return (
    <WrapperView isOpen={isOpen} width={width}>
      <ViewTemplate>
        <WrapperContent>
          <NavList />
        </WrapperContent>
      </ViewTemplate>
    </WrapperView>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool,
};
