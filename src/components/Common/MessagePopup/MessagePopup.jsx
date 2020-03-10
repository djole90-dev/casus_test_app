import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

const AlertMessage = (props) => <Alert elevation={6} variant="filled" {...props} />;

const MessagePopup = ({ errorMessage, message, handleClose }) => (
  <Snackbar
    open={errorMessage || message ? true : false}
    autoHideDuration={4000}
    onClose={handleClose}
  >
    <AlertMessage onClose={handleClose} severity={errorMessage ? 'error' : 'success'}>
      {errorMessage || message}
    </AlertMessage>
  </Snackbar>
);

export default MessagePopup;
