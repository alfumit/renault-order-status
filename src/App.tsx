import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CarCard from './components/CarCard/CarCard';
import VinInput from './components/VinInput/VinInput';
import CarContext from './contexts/CarContenxt';

function App() {
  const [carData, setCarData] = useState({});
  const carContextValue = { carData, setCarData };

  return (
    <CarContext.Provider value={carContextValue as any}>
      <Grid container className="App" alignContent="center" justify="center">
        <VinInput />
      </Grid>
      <Grid container justify="center" alignContent="center">
        <CarCard />
      </Grid>
    </CarContext.Provider>
  );
}

export default App;
