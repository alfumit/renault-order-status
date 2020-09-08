import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Icon } from '@material-ui/core';
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
    justifyItems: 'flex-start',
  },
});

const CarStatus = (props: any) => {
  const { carData } = useContext(CarContext);
  const classes = useStyles();
  const { status } = carData[0];
  const steps = ['Order confirmed', 'Car produced', 'Car produced step 2', 'On it\'s way to a dealer',
    'Delivered to a dealer', 'Received by customer'];

  return (
    <div>
      <h3>Detailed status of your order:</h3>
      <Grid container className={classes.stepsContainer} justify="center">
        {steps.map((item, index) => (
          <Grid item xs={4} key={item} className={index < status ? classes.passed : ''}>
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
