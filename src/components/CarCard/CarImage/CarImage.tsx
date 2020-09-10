import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import unknown from '../../../assets/images/cars/unknown.png';
import ynl from '../../../assets/images/cars/YNL.png';
import yqz from '../../../assets/images/cars/YQZ.png';
import yqy from '../../../assets/images/cars/YQY.png';
// import i369 from '../../assets/images/i369.png';
// import i676 from '../../assets/images/i676.png';
import d17 from '../../../assets/images/cars/D17.png';
import d69 from '../../../assets/images/cars/D69.png';
import kad from '../../../assets/images/cars/KAD.png';
import npi from '../../../assets/images/cars/NPI.png';
import rqh from '../../../assets/images/cars/RQH.png';
import xtk from '../../../assets/images/cars/XTK.png';
import xtl from '../../../assets/images/cars/XTL.png';
import xtm from '../../../assets/images/cars/XTM.png';
import xtn from '../../../assets/images/cars/XTN.png';
import xtp from '../../../assets/images/cars/XTP.png';
import xtr from '../../../assets/images/cars/XTR.png';
import xue from '../../../assets/images/cars/XUE.png';
import xvq from '../../../assets/images/cars/XVQ.png';
import ynn from '../../../assets/images/cars/YNN.png';
import yqx from '../../../assets/images/cars/YQX.png';
import yra from '../../../assets/images/cars/YRA.png';
import yrb from '../../../assets/images/cars/YRB.png';
import yrc from '../../../assets/images/cars/YRC.png';

const images: any = {
  yqy,
  ynl,
  yqz,
  // i369,
  // i676,
  d17,
  d69,
  kad,
  npi,
  rqh,
  xtk,
  xtl,
  xtm,
  xtn,
  xtp,
  xtr,
  xue,
  xvq,
  ynn,
  yqx,
  yra,
  yrb,
  yrc,
};

const useStyles = makeStyles({
  carImage: {
    maxWidth: '100%',
    maxHeight: '12rem',
  },
});

const CarImage = (props: any) => {
  const { carColor } = props;
  const classes = useStyles();

  return (
    <figure>
      <img className={classes.carImage} src={images[carColor.toLowerCase()] || unknown} alt="You car image" />
    </figure>
  );
};

export default CarImage;
