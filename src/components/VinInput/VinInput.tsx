import React, { useContext, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import VinContext from '../../contexts/vinContenxt';

const VinInput: React.FC = () => {
  const { vin, setVin } = useContext(VinContext);

  const vinHandler = (vinFieldValue: string) => {
    setVin(vinFieldValue);
  };

  return (
    <div>
      <Typography variant="h2">
        Please, enter your vin code
      </Typography>
      <TextField
        id="vin"
        value={vin}
        onChange={(e) => vinHandler(e.target.value)}
      />
    </div>
  );
};

export default VinInput;
