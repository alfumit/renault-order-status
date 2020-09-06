import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CarCard from './components/CarCard/CarCard';
import VinInput from './components/VinInput/VinInput';
import VinContext from './contexts/vinContenxt';

function App() {
  const [vin, setVin] = useState('X7LASRA3C66196043');
  const vinContextValue = { vin, setVin };

  return (
    <VinContext.Provider value={vinContextValue as any}>
      <Grid container className="App" alignContent="center">
        <VinInput />
        <CarCard />
      </Grid>
    </VinContext.Provider>
  );
}

export default App;
