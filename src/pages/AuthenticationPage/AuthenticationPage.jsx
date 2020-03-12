import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import RegisterFormContainer from '../../containers/Forms/RegisterFormContainer';
import LoginFormContainer from '../../containers/Forms/LoginFormContainer';

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
        <Route path="/" exact component={RegisterFormContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Redirect to="/" />
      </AuthContent>
    </AuthSection>
  </Container>
);

export default AuthenticationPage;
