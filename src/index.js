import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthActions } from './redux/actions';
import store from './redux/store';
import App from './App';
import './index.css';

if (localStorage.currentUser) {
  const currentUser = JSON.parse(localStorage.currentUser)
  delete currentUser.token
  store.dispatch(
    AuthActions.loginSuccess(currentUser)
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
