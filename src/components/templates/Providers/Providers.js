import React from 'react';
import PropTypes from 'prop-types';
import SEO from 'components/organisms/SEO/SEO';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyles';
import GlobalState from 'providers/GlobalState/GlobalState';
import { theme } from 'themes/theme';

const Providers = ({ children }) => {
  return (
    <SEO>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalState>{children}</GlobalState>
      </ThemeProvider>
    </SEO>
  );
};

export default Providers;

Providers.propTypes = {
  children: PropTypes.node,
};
