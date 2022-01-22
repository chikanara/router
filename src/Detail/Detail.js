import React from 'react';
import { useParams } from "react-router-dom";

const Detail = ({products}) => {
  const params = useParams();
  const detailProduct = products.find(product => product.id == params.id)
  console.log(detailProduct);
  console.log(params);
  return <div>
      <h1>Detail</h1>
      <div>
        <img src={detailProduct.imgSrc} alt="" />
      </div>
      <p>{detailProduct.name}</p>
      <p>{detailProduct.price}</p>
  </div>;
};

export default Detail;
