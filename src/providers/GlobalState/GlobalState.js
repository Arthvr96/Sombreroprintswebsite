import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalStateContext = createContext({
  isOpenHamburger: '',
  toggleHamburger: () => {},
});

const GlobalState = ({ children }) => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  const toggleHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  return (
    <GlobalStateContext.Provider
      value={{
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
