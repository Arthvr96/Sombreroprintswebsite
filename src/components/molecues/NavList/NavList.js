import React from 'react';
import styled from 'styled-components';

import { NavItem } from 'components/atoms/NavItem/NavItem';

const NavigationWrapper = styled.nav``;
const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const NavList = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavItem>Styles</NavItem>
        <NavItem>Posters</NavItem>
        <NavItem>Shipping</NavItem>
        <NavItem>Faq</NavItem>
        <NavItem>Contact</NavItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default NavList;
