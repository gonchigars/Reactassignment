import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const CardComponent = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          MANI SUGGUNA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I am ManiSugguna 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Accept
        </Button>
        <Button size="small" color="secondary">
          Decline
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
