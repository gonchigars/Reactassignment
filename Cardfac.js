import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const CardWithButton = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Facebook</Typography>
        <Typography variant="h7">notifications</Typography>
        <Typography variant="body2">Friend request.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Decline</Button>
      </CardActions>
    </Card>
  );
};

export default CardWithButton;