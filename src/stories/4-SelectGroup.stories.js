import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectGroup from '../components/Common/SelectGroup/SelectGroup';

export default {
  title: 'Select Group',
  component: SelectGroup,
  excludeStories: /.*Data$/
};

export const selectGroupData = {
  label: 'Select Label',
  value: 'Value 1',
  options: [{label: 'Label 1', value: 'Value 1'}, {label: 'Label 2', value: 'Value 2'}]
};

export const actionsData = {
  onChange: action('handleChange')
};

export const WithoutSelectedValue = () => (
  <SelectGroup {...selectGroupData} {...actionsData} value={null}/>
);

export const WithSelectedValue = () => (
  <SelectGroup {...selectGroupData} {...actionsData}/>
);

export const WithError = () => <SelectGroup {...selectGroupData} {...actionsData} value={null} error="true"/>

