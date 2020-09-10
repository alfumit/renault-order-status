import axios from 'axios';
import redWhite from '../mocks/red-white-car';

const apiHost = 'https://rdwapp.renault.ru/api/v1';

const checkStatus = (vin: string) => {
  const reqUrl = `${apiHost}/status/${vin}`;
  return axios.get(reqUrl);
};

const getDates2 = (vin: string) => {
  const reqUrl = `${apiHost}/dates2/${vin}`;
  return axios.get(reqUrl);
};

const getDates6 = (vin: string) => {
  const reqUrl = `${apiHost}/dates6/${vin}`;
  return axios.get(reqUrl);
};

const getCarInfo = (vin: string) => {
  const reqUrl = `${apiHost}/info/${vin}`;
  return axios.get(reqUrl);
};

const getAllData = (vin: string, useMock?: boolean) => {
  if (useMock) return Promise.resolve(redWhite);

  return Promise.all([checkStatus(vin),
    getCarInfo(vin), getDates2(vin), getDates6(vin)])
    .then((res) => Promise.resolve(res.map((item) => item.data.data[0].attributes)));
};

export {
  checkStatus, getCarInfo, getDates2, getDates6, getAllData,
};
