import React from 'react';
import Header from '../../components/Header/Header';
import { StyledContainer, Logo } from './MainLayout.styles';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes/theme';
import logo_image from '../../assets/logo.JPG'

const MainLayout = ({ children, isAuthenticated = true }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledContainer>
          {isAuthenticated ? <Header /> : <Logo src={logo_image} />}
          {children}
        </StyledContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default MainLayout;
