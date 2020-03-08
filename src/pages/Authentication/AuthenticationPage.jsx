import React from 'react';
import {
  CopySection,
  AuthSection,
  Container,
  CopyContent,
  Heading,
  HeadingContent,
  Text,
  AuthContent,
} from './AuthenticationPage.styles';
import authPageContent from '../../constants/content/authPageContent';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm'
const AuthenticationPage = () => (
  <Container>
    <CopySection>
      <CopyContent>
        <HeadingContent>
          <Heading>{authPageContent.heading[0]}</Heading>
          <Heading>{authPageContent.heading[1]}</Heading>
          <Heading>{authPageContent.heading[2]}</Heading>
        </HeadingContent>
        <Text>{authPageContent.text}</Text>
      </CopyContent>
    </CopySection>
    <AuthSection>
      <AuthContent>
        <RegisterForm />
      </AuthContent>
    </AuthSection>
  </Container>
);

export default AuthenticationPage;
