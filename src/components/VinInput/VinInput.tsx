import React, { useContext, useState } from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import CarContext from '../../contexts/CarContenxt';
import { getAllData } from '../../services/carsApi';

const VinInput: React.FC = () => {
  const [vin, setVin] = useState('X7LASRA3C66196043');
  const { setCarData } = useContext(CarContext);

  const vinHandler = (vinFieldValue: string) => {
    setVin(vinFieldValue);
  };

  const getCarInfo = () => {
    if (vin) {
      getAllData(vin)
        .then((res) => {
          console.log(res);
          setCarData(res);
        }).catch((err) => console.log('Unable to fetch data', err.message));
    } else {
      console.log('Please enter something');
    }
  };

  return (
    <div>
      <Typography variant="h2">
        Please, enter your vin code
      </Typography>
      <Grid container>
        <Grid item xs={8}>
          <TextField
            id="vin"
            value={vin}
            onChange={(e) => vinHandler(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" onClick={() => getCarInfo()}>Get Info</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default VinInput;
