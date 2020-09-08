import React, { useContext, useState } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CarContext from '../../contexts/CarContext';
import { getAllData } from '../../services/carsApi';

const useStyles = makeStyles({
  header: {
    paddingBottom: '1rem',
  },
});

const VinInput: React.FC = () => {
  const [vin, setVin] = useState('');
  const { carData, setCarData, setLoading } = useContext(CarContext);
  const classes = useStyles();

  const vinHandler = (vinFieldValue: string) => {
    setVin(vinFieldValue);
  };

  const getCarInfo = () => {
    if (vin) {
      setLoading(true);
      getAllData(vin)
        .then((res) => {
          console.log(res);
          setCarData(res);
        })
        .catch((err) => console.log('Unable to fetch data', err.message))
        .finally(() => setLoading(false));
    } else {
      console.log('Please enter something');
    }
  };

  return (
    <div>
      <Typography variant="h4" className={classes.header}>
        Please enter your VIN code
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="vin"
            variant="outlined"
            label="VIN"
            required
            value={vin}
            onChange={(e) => vinHandler(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" size="large" onClick={() => getCarInfo()}>Get Info</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default VinInput;
