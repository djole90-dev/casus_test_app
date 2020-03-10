import React from 'react';
import {
  Container,
  Content,
  LinearProgress,
  CheckContainer,
  Text,
  Status,
  CheckIcon
} from './PasswordStrengthMeter.styles';

const CheckEl = ({label, strength}) => (
  <CheckContainer>
    <CheckIcon  strength={strength}/>
    <Text strength={strength}>{label}</Text>
  </CheckContainer>
);

const PasswordStrengthMeter = ({ password }) => {
  const strength = password.length > 7 ? 100 : 25
  return (
    <Container>
      <Content>
        <CheckEl label="Mindestens 8 Zeichen" strength={strength}/>
        <Status strength={strength}>{strength < 26 ? 'Sehr Schwach' : 'Ok'}</Status>
        <LinearProgress variant="determinate" value={strength}/>
      </Content>
    </Container>
  );
};

export default PasswordStrengthMeter;
