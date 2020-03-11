import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { MainContainer, Container, Logo } from './MainLayout.styles';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes/theme';
import logo_image from '../../assets/logo.JPG';

const MainLayout = ({ children, isAuthenticated }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer>
          {isAuthenticated && <Header />}
          <Container>
            {!isAuthenticated && <Logo src={logo_image} />}
            {children}
          </Container>
        </MainContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(MainLayout);
