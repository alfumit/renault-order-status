import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CarContext from './contexts/CarContext';
import MessageContext from './contexts/MessageContext';

import CarCard from './components/CarCard/CarCard';
import VinInput from './components/VinInput/VinInput';
import Footer from './components/Footer/Footer';
import RosSnackbar from './components/RosSnackbar/RosSnackbar';

const useStyles = makeStyles({
  vinHeader: {
    padding: '0 0 1rem',
  },
});

function App() {
  const [carData, setCarData] = useState({});
  const [loading, setLoading] = useState(false);
  const [useMock, setUseMock] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [messageValue, setMessageValue] = useState('');
  const carContextValue = {
    loading, carData, useMock, setCarData, setLoading, setUseMock,
  };
  const messageContextValue = {
    open: openMessage, message: messageValue, setOpen: setOpenMessage, setMessage: setMessageValue,
  };

  const classes = useStyles();

  return (
    <MessageContext.Provider value={messageContextValue}>
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
        <RosSnackbar />
      </CarContext.Provider>
    </MessageContext.Provider>
  );
}

export default App;
