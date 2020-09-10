import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CarCard from './components/CarCard/CarCard';
import VinInput from './components/VinInput/VinInput';
import CarContext from './contexts/CarContext';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles({
  vinHeader: {
    padding: '1rem 0',
  },
});

function App() {
  const [carData, setCarData] = useState({});
  const [loading, setLoading] = useState(false);
  const [useMock, setUseMock] = useState(false);
  const carContextValue = {
    loading, carData, useMock, setCarData, setLoading, setUseMock,
  };
  const classes = useStyles();

  return (
    <CarContext.Provider value={carContextValue as any}>
      <div className="App">
        <Grid container className={classes.vinHeader} alignContent="center" justify="center">
          <VinInput />
        </Grid>
        <Grid container justify="center" alignContent="center">
          <CarCard />
        </Grid>
      </div>
      <Footer />
    </CarContext.Provider>
  );
}

export default App;
