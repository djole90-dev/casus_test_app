import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckboxGroup from '../components/Common/CheckboxGroup/CheckboxGroup';

export default {
  title: 'Checkbox Group',
  component: CheckboxGroup,
  excludeStories: /.*Data$/
};

export const checkboxData = {
  label: 'Checkbox Label'
};

export const actionsData = {
  onChange: action('handleChange')
};

export const NotChecked = () => (
  <CheckboxGroup checked={false} {...checkboxData} {...actionsData} />
);
export const Checked = () => (
  <CheckboxGroup checked={true} {...checkboxData} {...actionsData} />
);
export const MultiLineLabel = () => (
  <div style={{width: '300px'}}>
    <CheckboxGroup
    checked={true}
    multiline="true"
    {...checkboxData}
    {...actionsData}
    label="This is a very long label text that can't fit on one line. Checkbox is moved to the top"
  />
  </div>
);

export const ErrorCheckbox = () => (
  <CheckboxGroup error="true" {...checkboxData} {...actionsData} label="Required Checkbox not checked"/>
);
