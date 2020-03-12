import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AuthActions } from '../../redux/actions'
import LoginForm from '../../components/Forms/LoginForm/LoginForm';

const LoginFormContainer = ({
  loginUser,
  history,
  isLoading,
  errorMessage
}) => {
  const [ state, setState ] = useState({ email: '', password: '' });
  const [ errMsg, setErrorMessage ] = useState(null);

  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();
    loginUser(state, history);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(
    () => {
      setErrorMessage(errorMessage);
    },
    [ errorMessage ]
  );

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      errMsg={errMsg}
      handleChange={handleChange}
      state={state}
      setErrorMessage={setErrorMessage}
    />
  );
};

const mapStateToProps = ({ auth, messages: { errorMessage } }) => ({
  isLoading: auth.isLoading,
  errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data, history) => dispatch(AuthActions.loginStart(data, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(LoginFormContainer)
);
