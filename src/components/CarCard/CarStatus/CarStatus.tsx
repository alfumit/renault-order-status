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
    'Delivered to dealer', 'Received by customer'];
  const extraSteps = ['Making PTS', 'PTS ready'];
  let activeStep = status;
  let extraStep = -1;

  if (status > 6) {
    activeStep = 5;
    extraStep = status - 7;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>Detailed status of your order:</Typography>
      <Grid container className={classes.stepsContainer} justify="center">
        {steps.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item} className={index < activeStep ? classes.passed : ''}>
            <div className={classes.step}>
              {index < activeStep && <Icon>check_circle_outline</Icon>}
              {index >= activeStep && <Icon>highlight_off</Icon>}
              {` Step ${index + 1}: ${item}`}
            </div>
          </Grid>
        ))}
      </Grid>
      {extraStep >= 0 && (
      <>
        <Typography variant="h6" gutterBottom>Acquiring PTS:</Typography>
        <Grid container className={classes.stepsContainer} justify="center">
          {extraSteps.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item} className={index < extraStep ? classes.passed : ''}>
              <div className={classes.step}>
                {index < extraStep && <Icon>check_circle_outline</Icon>}
                {index >= extraStep && <Icon>highlight_off</Icon>}
                {` Step ${index + 1}: ${item}`}
              </div>
            </Grid>
          ))}
        </Grid>
      </>
      )}
    </div>
  );
};

export default CarStatus;
