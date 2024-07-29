import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const DialogWithButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       POGO E-commerce website 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Product to conform</DialogTitle>
        <DialogContent>
          <Typography variant="body2">Final confirmation on product.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithButton;