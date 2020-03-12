import React from 'react';
import { action } from '@storybook/addon-actions';
import TextInputGroup from '../components/Common/TextInputGroup/TextInputGroup'

export default {
  title: 'Text Input Group',
  component: TextInputGroup,
  excludeStories: /.*Data$/
};

export const textInputData = {
  value: 'Text input value',
  label: 'Input Label'
}

export const actionsData = {
  onChange: action('handleChange')
};

export const Text = () => <TextInputGroup type="text"  {...textInputData} {...actionsData}/>
export const Password = () => <TextInputGroup type="password" {...textInputData} {...actionsData}/>
export const ErrorInput = () => <TextInputGroup type="text" error="true"  {...textInputData} {...actionsData}/>