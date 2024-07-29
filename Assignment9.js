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
      <Button sx={{ml:25}} variant="outlined" onClick={handleClickOpen}>
        submit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>confirm action</DialogTitle>
        <DialogContent>
          <Typography variant="body2">are u sure</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithButton;