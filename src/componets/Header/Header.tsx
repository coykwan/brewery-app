import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters variant="dense">
          <Typography color='secondary' variant='h6' sx={{paddingLeft: '10px'}}>Kansas City Missouri Breweries</Typography>
        </Toolbar>
      </AppBar>
    </>

  );
};