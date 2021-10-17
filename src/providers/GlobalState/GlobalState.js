import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalStateContext = createContext({ scrollPos: '', setScrollPos: () => {} });

const GlobalState = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <GlobalStateContext.Provider value={{ scrollPos, setScrollPos }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;

GlobalState.propTypes = {
  children: PropTypes.node,
};
