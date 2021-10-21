import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalStateContext = createContext({
  scrollPosY: '',
  setScrollPosY: () => {},
  scrollPosX: '',
  setScrollPosX: () => {},
  isOpenHamburger: '',
  toggleHamburger: () => {},
});

const GlobalState = ({ children }) => {
  const [scrollPosY, setScrollPosY] = useState(0);
  const [scrollPosX, setScrollPosX] = useState(0);
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  const toggleHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        scrollPosY,
        setScrollPosY,
        scrollPosX,
        setScrollPosX,
        isOpenHamburger,
        toggleHamburger,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;

GlobalState.propTypes = {
  children: PropTypes.node,
};
