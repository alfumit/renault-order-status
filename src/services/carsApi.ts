import axios from 'axios';

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

export {
  checkStatus, getCarInfo, getDates2, getDates6,
};

//     status/X7LASRA3C66196043
// https://rdwapp.renault.ru/api/v1/dates2/X7LASRA3C66196043
//     https://rdwapp.renault.ru/api/v1/dates6/X7LASRA3C66196043
//         https://rdwapp.renault.ru/api/v1/info/X7LASRA3C66196043
