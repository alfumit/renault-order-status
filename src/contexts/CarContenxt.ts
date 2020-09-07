import React from 'react';

const CarContext = React.createContext({
  // carData: {
  //   vin: 'X7LASRA3C66196043',
  //   attributes: {},
  //   dates: {},
  // },
  carData: [] as any,
  setCarData: (props: any): any => {},
});

export default CarContext;
