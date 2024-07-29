import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const CardWithButton = () => {
  return (
    <Card>
      <CardContent sx={{ml:25}}>
        <Typography variant="h5">Tap here to learn more</Typography>
        <Typography variant="body2">more information .</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ml:25}} size ="small">Learn More</Button>
        <Button sx={{ml:25}}size="medium">Accept</Button>
        <Button sx={{ml:25}} size="large">Decline</Button>
      </CardActions>
    </Card>
  );
};

export default CardWithButton;