import React, { useState } from 'react';
import { Dialog, Button,DialogActions } from '@mui/material';

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
        <Button>Confirm</Button>
        <Button>Cancel</Button>
        </Dialog>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        {/* <DialogContent>
          <Typography variant="body2">Dialog content goes here.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      
    </div>
  );
};

export default DialogWithButton;