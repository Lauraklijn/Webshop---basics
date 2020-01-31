import React from "react";

const Products = props => {
  return (
    <div>
      <h2>{props.products.id}</h2>
      <h2>{props.products.name}</h2>
      <img src={props.products.imageUrl}></img>
      <h2>€{props.products.price}</h2>
    </div>
  );
};

export default Products;
