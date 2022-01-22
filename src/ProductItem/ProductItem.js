import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <tr>
      <td>
        <Link to={`/products/${product.id}`}>
          <Button variant="outline-warning">Cliquer ici</Button>
        </Link>
      </td>
      <td>
        <img src={product.imgSrc} alt="" />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductItem;
