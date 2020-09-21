import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import CarContext from './contexts/CarContext';
import MessageContext from './contexts/MessageContext';

import Footer from './components/Footer/Footer';
import RosSnackbar from './components/RosSnackbar/RosSnackbar';
import CarPage from './pages/CarPage';
import RosAppBar from './components/RosAppBar/RosAppBar';
import RosDrawer from "./components/RosDrawer/RosDrawer";

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

  return (
    <MessageContext.Provider value={messageContextValue}>
      <CarContext.Provider value={carContextValue as any}>
        <Router>
          <RosAppBar />
          <Switch>
            <Route path="/">
              <CarPage />
            </Route>
          </Switch>
          <Footer />
          <RosSnackbar />
          <RosDrawer />
        </Router>
      </CarContext.Provider>
    </MessageContext.Provider>
  );
}

export default App;
