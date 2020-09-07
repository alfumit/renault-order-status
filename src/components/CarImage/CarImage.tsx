import React from 'react';
import ynl from '../../assets/images/YNL.png';
import yqz from '../../assets/images/YQZ.png';
import yqy from '../../assets/images/YQY.png';
// import i369 from '../../assets/images/i369.png';
// import i676 from '../../assets/images/i676.png';
import d17 from '../../assets/images/D17.png';
import d69 from '../../assets/images/D69.png';
import kad from '../../assets/images/KAD.png';
import npi from '../../assets/images/NPI.png';
import rqh from '../../assets/images/RQH.png';
import xtk from '../../assets/images/XTK.png';
import xtl from '../../assets/images/XTL.png';
import xtm from '../../assets/images/XTM.png';
import xtn from '../../assets/images/XTN.png';
import xtp from '../../assets/images/XTP.png';
import xtr from '../../assets/images/XTR.png';
import xue from '../../assets/images/XUE.png';
import xvq from '../../assets/images/XVQ.png';
import ynn from '../../assets/images/YNN.png';
import yqx from '../../assets/images/YQX.png';
import yra from '../../assets/images/YRA.png';
import yrb from '../../assets/images/YRB.png';
import yrc from '../../assets/images/YRC.png';

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

const CarImage = (props: any) => {
  const { carColor } = props;
  return (
    <div>
      <img src={images[carColor.toLowerCase()]} alt="Car color" />
    </div>
  );
};

export default CarImage;
