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
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography variant="body2">Dialog content goes here.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>confirm</Button>
          <Button onClick={handleClose}>cancle</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithButton;