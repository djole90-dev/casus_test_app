import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import {
  MainContainer,
  Container,
  Logo,
  OverflowWrapper
} from './MainLayout.styles';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from '../../themes/theme';
import logo_image from '../../assets/logo.JPG';

const MainLayout = ({ children, isAuthenticated }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <MainContainer>
          {isAuthenticated && <Header />}
          <OverflowWrapper>
            <Container>
              {!isAuthenticated && <Logo src={logo_image} />}
              {children}
            </Container>
          </OverflowWrapper>
        </MainContainer>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(MainLayout);
