import React from 'react';
import { Route } from 'react-router-dom';
import {
  CopySection,
  AuthSection,
  Container,
  CopyContent,
  Heading,
  HeadingContent,
  Text,
  AuthContent
} from './AuthenticationPage.styles';
import authPageContent from '../../constants/content/authPageContent';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const AuthenticationPage = () => (
  <Container>
    <CopySection>
      <CopyContent>
        <HeadingContent>
          <Heading variant="h1">
            {authPageContent.heading[0]}
            <br />
            {authPageContent.heading[1]}
            <br />
            {authPageContent.heading[2]}
          </Heading>
        </HeadingContent>
        <Text>{authPageContent.text}</Text>
      </CopyContent>
    </CopySection>
    <AuthSection>
      <AuthContent>
        <Route path="/" exact component={RegisterForm} />
        <Route path="/login" exact component={LoginForm} />
      </AuthContent>
    </AuthSection>
  </Container>
);

export default AuthenticationPage;
