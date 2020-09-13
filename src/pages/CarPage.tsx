import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VinInput from '../components/VinInput/VinInput';
import CarCard from '../components/CarCard/CarCard';
import useQuery from '../hooks/query';

const useStyles = makeStyles({
  vinHeader: {
    padding: '0 0 1rem',
  },
});

const CarPage = () => {
  const classes = useStyles();
  const query = useQuery();

  return (
    <div className="App">
      <Grid container className={classes.vinHeader} alignContent="center" justify="center">
        <VinInput vinParam={query.get('vin')} />
      </Grid>
      <Grid container justify="center" alignContent="center">
        <CarCard />
      </Grid>
    </div>
  );
};

export default CarPage;
