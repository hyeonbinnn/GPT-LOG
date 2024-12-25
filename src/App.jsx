import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import ScrollTopButton from './components/Button/ScrollTopButton';
import Router from './routes/Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <ScrollTopButton />
    </ThemeProvider>
  );
};

export default App;
