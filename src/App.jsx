import React from 'react';
import MainLayout from './layout/MainLayout/MainLayout';
import { Switch, Route } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Main from './pages/Main/Main'

const App = ({ isAuthenticated = true }) => {
  let content;

  if (!isAuthenticated) {
    content =  <Switch><Route path="/" component={AuthenticationPage} /></Switch>
  } else {
    content = <Main />
  }

  return (
    <MainLayout>
        {content}
    </MainLayout>
  );
};

export default App;
