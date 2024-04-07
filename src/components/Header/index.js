import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#2196f3', // Blue background color
  },
  title: {
    flexGrow: 1,
  },
  navItems: {
    flexGrow: 1,
    textAlign: 'center',
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Business icon on the left */}
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.iconButton}>
          <BusinessIcon />
        </IconButton>
        
        {/* Navigation items in the middle */}
        <Typography variant="h6" className={classes.navItems}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Typography>

        {/* Login button on the right */}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
