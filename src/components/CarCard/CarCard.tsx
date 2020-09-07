import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CarImage from '../CarImage/CarImage';
import CarContext from '../../contexts/CarContenxt';

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
  const { carData } = useContext(CarContext);

  console.log(carData);

  return (
    <Card className={classes.root} variant="outlined">
      {carData.length && (
      <CardContent>
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

        <Typography className={classes.title} align="left" color="textSecondary" gutterBottom>
          And status is
          {' '}
          { carData[0].status }
        </Typography>
        <div>
          <CarImage carColor={carData[1].color} />
        </div>
      </CardContent>
      )}
      {!carData.length && <h1>No car data</h1>}
      <CardActions>
        <Button size="small" variant="outlined">Subscribe to telegram bot</Button>
      </CardActions>
    </Card>
  );
}
