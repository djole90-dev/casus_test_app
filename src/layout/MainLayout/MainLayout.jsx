import React from 'react';
import Header from '../../components/Header/Header';
import { StyledContainer } from './MainLayout.styles';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/theme';

const MainLayout = ({ children, isAuthenticated = false }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <StyledContainer>
        {isAuthenticated && <Header />}
        {children}
      </StyledContainer>
    </ThemeProvider>
  </StylesProvider>
);

export default MainLayout;
