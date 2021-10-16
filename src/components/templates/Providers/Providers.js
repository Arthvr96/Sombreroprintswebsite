import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'themes/GlobalStyles';
import { theme } from 'themes/theme';

const Providers = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h2>HelloWorld</h2>
    </ThemeProvider>
  );
};

export default Providers;
