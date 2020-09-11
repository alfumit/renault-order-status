import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Icon, Typography } from '@material-ui/core';
import CarContext from '../../../contexts/CarContext';

const useStyles = makeStyles({
  passed: {
    color: 'green',
  },
  stepsContainer: {
    padding: '0 2rem',
  },
  step: {
    display: 'flex',
    justifyItems: 'center',
    padding: '.25rem 0',
  },
});

const CarStatus = () => {
  const { carData } = useContext(CarContext);
  const classes = useStyles();
  const { status } = carData[0];
  const steps = ['Order confirmed', 'Car ready', 'Car ready 2', 'On it\'s way to dealer',
    'Delivered to dealer', 'Received by customer'/* , 'Making PTS', 'PTS ready' */];

  return (
    <div>
      <Typography variant="h4" gutterBottom>Detailed status of your order:</Typography>
      <Grid container className={classes.stepsContainer} justify="center">
        {steps.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item} className={index < status ? classes.passed : ''}>
            <div className={classes.step}>
              {index < status && <Icon>check_circle_outline</Icon>}
              {index >= status && <Icon>highlight_off</Icon>}
              {` Step ${index + 1}: ${item}`}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CarStatus;
