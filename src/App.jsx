import React from 'react';
import MainLayout from './layout/MainLayout/MainLayout'
import { Switch, Route } from 'react-router-dom'
import AuthenticationPage from './pages/Authentication/AuthenticationPage'

const App = () => {
  return (
   <MainLayout>
   {/* <Switch>
       <Route path="/" component={AuthenticationPage} />
     </Switch> */}
      <AuthenticationPage />
   </MainLayout>
  );
}

export default App;
