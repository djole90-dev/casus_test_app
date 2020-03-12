import React from 'react';
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  LinearProgress,
  CheckContainer,
  Text,
  Status,
  CheckIcon
} from './PasswordStrengthMeter.styles';

const CheckEl = ({label, strength, error}) => (
  <CheckContainer>
    <CheckIcon  strength={strength} error={error}/>
    <Text strength={strength} error={error}>{label}</Text>
  </CheckContainer>
);

const PasswordStrengthMeter = ({ password, error }) => {
  const strength = password.length > 7 ? 100 : 25
  return (
    <Container>
      <Content>
        <CheckEl label="Mindestens 8 Zeichen" strength={strength} error={error ? 'true' : null}/>
        <Status strength={strength}>{strength < 26 ? 'Sehr Schwach' : 'Mega super stark :)'}</Status>
        <LinearProgress variant="determinate" value={strength}/>
      </Content>
    </Container>
  );
};

CheckEl.propTypes = {
  label: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired
}

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string.isRequired
}

export default PasswordStrengthMeter;
