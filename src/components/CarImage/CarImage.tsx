import React from 'react';
import ynl from '../../assets/images/ynl.png';
import yqz from '../../assets/images/yqz.png';
import yqy from '../../assets/images/yqy.png';
import ynn from '../../assets/images/ynn.png';

const images: any = {
  yqy, ynl, yqz, ynn,
};

const CarImage = (props: any) => {
  const { carColor } = props;
  console.log(images);
  return (

    <div>
      <img src={images[carColor]} alt="Car color" />
    </div>
  );
};

export default CarImage;
