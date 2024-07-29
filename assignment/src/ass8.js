import React from 'react';
import { Card, CardActions, Button, Box } from '@mui/material';

const CardWithButton = () => {
  return (
    <Card>
      
        
      <CardActions>
        <Box sx={{ml:65,mr:10}}>
        <Button variant="contained"> Accept</Button>
        </Box>
        <Button size="contained">Decline </Button>
        

      </CardActions>
    </Card>
  );
};

export default CardWithButton;