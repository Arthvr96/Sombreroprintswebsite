import React from 'react';
import Logo from 'components/molecues/Logo/Logo';
import { CartButton } from 'components/molecues/CartButton/CartButton';
import { HamburgerButton } from 'components/molecues/HamburgerButton/HamburgerButton';
import { NavBar, ButtonsWrapper } from './Navigation.style';

const Navigation = () => {
  return (
    <NavBar>
      <Logo />
      <ButtonsWrapper>
        <CartButton>
          <div />
        </CartButton>
        <HamburgerButton>
          <div>
            <span />
          </div>
        </HamburgerButton>
      </ButtonsWrapper>
    </NavBar>
  );
};

export default Navigation;
