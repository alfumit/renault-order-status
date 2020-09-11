import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    background: '#FFF',
    borderTop: '1px solid gray',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Typography variant="caption">This is not an official service. Not used for commercial purposes. Use at your own risk. </Typography>
      <Typography variant="caption">
        <Link href="https://github.com/alfumit/renault-order-status">
          Github Repository
        </Link>
      </Typography>
    </Grid>
  );
};

export default Footer;
