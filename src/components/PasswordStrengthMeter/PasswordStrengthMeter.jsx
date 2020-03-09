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

const CheckEl = ({label}) => (
  <CheckContainer>
    <CheckIcon />
    <Text>{label}</Text>
  </CheckContainer>
);

const PasswordStrengthMeter = ({ password }) => {
  return (
    <Container>
      <Content>
        <CheckEl label="Mindestens 8 Zeichen" />
        <Status>Sehr Schwach</Status>
        <LinearProgress variant="determinate" value={25} />
      </Content>
    </Container>
  );
};

export default PasswordStrengthMeter;
