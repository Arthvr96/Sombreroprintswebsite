import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyles';
import GlobalState from 'providers/GlobalState/GlobalState';
import { theme } from 'themes/theme';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalState>{children}</GlobalState>
    </ThemeProvider>
  );
};

export default Providers;

Providers.propTypes = {
  children: PropTypes.node,
};
