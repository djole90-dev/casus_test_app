import React, { useCallback } from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MessageTypes } from '../../../redux/types';

const AlertMessage = (props) => (
  <Alert elevation={6} variant="filled" {...props} />
);

const MessagePopup = ({ errorMessage, successMessage }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(
    () => {
      dispatch({ type: MessageTypes.CLEAR });
    },
    [ dispatch ]
  );

  return (
    <Snackbar
      open={errorMessage || successMessage ? true : false}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <AlertMessage
        onClose={handleClose}
        severity={errorMessage ? 'error' : 'success'}
      >
        {errorMessage || successMessage}
      </AlertMessage>
    </Snackbar>
  );
};

AlertMessage.propTypes = {
  severity: PropTypes.oneOf(['error', 'success']).isRequired,
  onClose: PropTypes.func.isRequired
}


export default MessagePopup;
