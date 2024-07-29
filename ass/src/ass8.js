import React from 'react';
import { Card, CardActions, Button,Box} from '@mui/material';

const CardWithButton = () => {
  return (
    <Card>
      <CardActions>
        <Box sx={{ml:65,mr:10}}>
        <Button variant="contained">Decline</Button>
        </Box>
        <Button size="Contained">Accept</Button>
      </CardActions>
    </Card>
  );
};

export default CardWithButton;