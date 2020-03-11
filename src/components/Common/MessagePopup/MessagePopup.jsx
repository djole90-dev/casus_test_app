import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MessageTypes } from '../../../redux/types';

const AlertMessage = (props) => (
  <Alert elevation={6} variant="filled" {...props} />
);

const MessagePopup = ({ errorMessage, message }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(
    () => {
      dispatch({ type: MessageTypes.CLEAR });
    },
    [ dispatch ]
  );

  return (
    <Snackbar
      open={errorMessage || message ? true : false}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <AlertMessage
        onClose={handleClose}
        severity={errorMessage ? 'error' : 'success'}
      >
        {errorMessage || message}
      </AlertMessage>
    </Snackbar>
  );
};

export default MessagePopup;
