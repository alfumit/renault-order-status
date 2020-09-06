import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  getDates6, getDates2, getCarInfo, checkStatus,
} from '../../services/carsApi';

import CarImage from '../CarImage/CarImage';
import VinContext from '../../contexts/vinContenxt';

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
  const [carInfo, setCarInfo] = useState('' as any);
  const { vin } = useContext(VinContext);

  const fetchVin = () => {
    getCarInfo(vin).then((res) => {
      setCarInfo(res.data.data[0]);
    });
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Your car color is
          {' '}
          {carInfo && carInfo.attributes.color.toLowerCase()}
        </Typography>
        {carInfo && (
        <div>
          <CarImage carColor={carInfo.attributes.color.toLowerCase()} />
        </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => fetchVin()}>Get Car Data</Button>
      </CardActions>
    </Card>
  );
}
