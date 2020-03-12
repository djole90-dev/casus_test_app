import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../components/Common/CustomButton/CustomButton'

const Button = (props) => (
  <div style={{maxWidth: '350px'}}>
    <CustomButton {...props}/>
  </div>
)

export default {
  title: 'Custom Button',
  component: CustomButton,
  excludeStories: /.*Data$/
};

export const buttonData = {
  title: 'Button Text',
  btntype: 'action'
}

export const actionsData = {
  onClick: action('handleClick')
};

export const ActionButton = () => <Button {...buttonData} {...actionsData}/>
export const WithLoader = () => <Button {...buttonData} {...actionsData} isLoading={true}/>
export const White = () => <Button {...buttonData} {...actionsData} btntype="btn-white"/>