import React from 'react';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter/PasswordStrengthMeter';

const Wrapper = (props) => (
    <div style={{ width: '320px', height: '120px', position: 'relative' }}>
      <PasswordStrengthMeter {...props} />{' '}
    </div>
);

export default {
  title: 'Password Strength',
  component: PasswordStrengthMeter,
  excludeStories: /.*Data$/
};

export const PasswordShort = () => <Wrapper password="123456" />;
export const PasswordOK = () => <Wrapper password="123456789" />;
export const PasswordError = () => <Wrapper password="1234" error={true} />;
