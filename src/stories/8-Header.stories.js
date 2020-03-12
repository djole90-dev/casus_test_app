import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../components/Header/Header';
import Provider from './withReduxAndRouter'

export default {
  title: 'Header',
  component: Header,
  excludeStories: /.*Data$/
};

export const actionsData = {
  logoutUser: action('User Logged out')
};

export const DocumentsCategoryList = () => (
  <Provider>
    <Header {...actionsData} />
  </Provider>
);
