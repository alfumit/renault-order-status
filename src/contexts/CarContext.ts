import React from 'react';

const CarContext = React.createContext({
  loading: false,
  useMock: false,
  carData: [] as any,
  setCarData: (props: any): any => {},
  setLoading: (props: any): any => {},
  setUseMock: (props: any): any => {},
});

export default CarContext;
