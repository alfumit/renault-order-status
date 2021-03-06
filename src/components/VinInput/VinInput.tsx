import React, { useContext, useEffect, useState } from 'react';
import {
  Button, ButtonGroup, Grid, TextField, Typography, Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CarContext from '../../contexts/CarContext';
import { getAllData } from '../../services/carsApi';
import MessageContext from '../../contexts/MessageContext';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingBottom: '1rem',
  },
  root: {
    width: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      width: '80%',
    },
  },
  [theme.breakpoints.down('xs')]: {
    buttons: {
      marginTop: '1rem',
    },
  },
}));

const VinInput = (props: { vinParam?: any }) => {
  const { vinParam } = props;
  const [vin, setVin] = useState(vinParam || '');
  const [requestError, setRequestError] = useState(false);

  const {
    setCarData, setLoading, useMock, setUseMock,
  } = useContext(CarContext);
  const { setOpen, setMessage } = useContext(MessageContext);

  const classes = useStyles();

  const vinHandler = (vinFieldValue: string) => {
    setVin(vinFieldValue.trim());
  };

  const getCarInfo = () => {
    if (vin || useMock) {
      setLoading(true);
      setCarData({});
      getAllData(vin, useMock)
        .then((res) => {
          console.log(res);
          setCarData(res);
          setRequestError(false);
        })
        .catch(() => {
          setRequestError(true);
          setOpen(true);
          setMessage('Please, check your VIN. Request error occurred');
        })
        .finally(() => setLoading(false));
    } else {
      setRequestError(true);
    }
  };

  const toggleMockData = () => {
    setUseMock(!useMock);
    setOpen(true);

    if (useMock) {
      setMessage('Real API data will be used');
    } else {
      setMessage('Mock data shall be used instead of the real API');
    }
  };

  useEffect(() => {
    if (vinParam) getCarInfo();
  }, [vinParam]);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography variant="h4">
          Please enter your VIN code
        </Typography>
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={6} xs={12}>
          <TextField
            id="vin"
            variant="outlined"
            label="VIN"
            required
            helperText={requestError ? 'Incorrect VIN' : ''}
            error={requestError}
            value={vin}
            onChange={(e) => vinHandler(e.target.value)}
          />
        </Grid>
        <Grid item sm={6} xs={12} className={classes.buttons}>
          <ButtonGroup size="medium">
            <Button variant="contained" color="primary" size="medium" onClick={() => getCarInfo()}>Get Info</Button>
            <Button variant={useMock ? 'contained' : 'outlined'} color="secondary" size="medium" onClick={() => toggleMockData()}>
              { useMock ? 'Use API' : 'Use Mock' }
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default VinInput;
