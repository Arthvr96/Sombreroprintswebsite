import React, { useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import Logo from 'components/molecues/Logo/Logo';
import CartButton from 'components/molecues/CartButton/CartButton';
import HamburgerButton from 'components/molecues/HamburgerButton/HamburgerButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { NavBar, ButtonsWrapper } from './Navigation.style';

const Navigation = () => {
  const { isOpenHamburger, toggleHamburger } = useContext(GlobalStateContext);

  return (
    <NavBar>
      <Logo />
      <ButtonsWrapper>
        <CartButton />
        <HamburgerButton onClick={toggleHamburger} isOpen={isOpenHamburger} />
      </ButtonsWrapper>
      <HamburgerMenu isOpen={isOpenHamburger} />
    </NavBar>
  );
};

export default Navigation;
