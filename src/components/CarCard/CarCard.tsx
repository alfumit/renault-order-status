import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CircularProgress, Grid } from '@material-ui/core';
import CarImage from './CarImage/CarImage';
import CarContext from '../../contexts/CarContext';
import CarStatus from './CarStatus/CarStatus';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CarCard() {
  const classes = useStyles();
  const { carData, loading } = useContext(CarContext);
  console.log('carData', carData);

  return (
    <Card className={classes.root} variant="outlined">
      {loading && <CircularProgress />}
      {!loading && carData.length && (
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.root} align="left" color="textPrimary" gutterBottom>
              Order information
            </Typography>
            <hr />
            <Typography className={classes.title} align="left" color="textSecondary" gutterBottom>
              Your car color is
              {' '}
              { carData[1].color}
            </Typography>
            <Typography className={classes.title} align="left" color="textSecondary" gutterBottom>
              Your car model is Renault
              {' '}
              { carData[1].model }
              {' '}
              { carData[1].version.replace(/_/g, ' ') }
            </Typography>
            <Typography className={classes.title} align="left" color="textSecondary" gutterBottom>
              Expected time of production
              {' '}
              { new Date(carData[2].realdt).toDateString() }
              {' '}
              { new Date(carData[2].realdt).toTimeString() }
            </Typography>
            <Typography className={classes.title} align="left" color="textSecondary" gutterBottom>
              Planned time of production
              {' '}
              { new Date(carData[2].plandt).toDateString() }
              {' '}
              { new Date(carData[2].plandt).toTimeString() }
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CarImage carColor={carData[1].color} />
          </Grid>
        </Grid>
        <Grid container alignContent="center" justify="center">
          <Grid item xs={12}>
            <CarStatus />
          </Grid>
        </Grid>
      </CardContent>
      )}
      {!loading && !carData.length && <h1>No car data</h1>}
      {!loading && carData.length && (
      <CardActions>
        <Button size="small" style={{ margin: '0 auto' }} variant="outlined">Subscribe to telegram bot</Button>
      </CardActions>
      )}
    </Card>
  );
}
