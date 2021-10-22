import React, { useContext } from 'react';
import { ScrollStateContext } from 'providers/ScrollState/ScrollState';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { NavItem } from 'components/atoms/NavItem/NavItem';
import { NavigationWrapper, NavigationList } from './NavList.style';

const navigationLinks = [
  {
    name: 'Home',
    target: 0,
  },
  {
    name: 'Styles Music',
    target: 1,
    switchSide: 1,
  },
  {
    name: 'Styles Movies',
    target: 1,
    switchSide: 2,
  },
  {
    name: 'Posters',
    target: 5,
  },
  {
    name: 'About posters',
    target: 6,
  },
  {
    name: 'Shipping',
    target: 7,
  },
  {
    name: 'Faq',
    target: 8,
  },
  {
    name: 'Contact',
    target: 9,
  },
];

const NavList = () => {
  const { handleScrollToSection } = useContext(ScrollStateContext);
  const { toggleHamburger } = useContext(GlobalStateContext);

  const onClick = (parms) => {
    handleScrollToSection(parms);
    toggleHamburger();
  };
  return (
    <NavigationWrapper>
      <NavigationList>
        {navigationLinks.map(({ name, target, switchSide }) => (
          <NavItem key={name} onClick={() => onClick({ target, switchSide })}>
            {name}
          </NavItem>
        ))}
      </NavigationList>
    </NavigationWrapper>
  );
};

export default NavList;
