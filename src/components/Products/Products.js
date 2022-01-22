import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../../ProductItem/ProductItem";



const Products = ({ products }) => {
 
  return (
    <Table striped bordered hover className="container">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th> Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
           
          />
        ))}
      </tbody>
    </Table>
  );
};


export default Products;