import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid, Button } from '@mui/material';

const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ flex: 1, py: 2 }}>
        <Grid container spacing={2}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Button variant="contained" fullWidth>
                Button {index + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography variant="body1">
          © 2024 My App
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
