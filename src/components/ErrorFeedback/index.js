import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const ErrorFeedback = ({ error, onClose }) => {
  return (
    <Dialog
      open={!!error}
      onClose={onClose}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title">Error</DialogTitle>
      <DialogContent>
        <DialogContentText id="error-dialog-description">
          No hay imagen seleccionada
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorFeedback;
