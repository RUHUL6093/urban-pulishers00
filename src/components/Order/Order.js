import React from "react";
import { useHistory } from "react-router";
import "./Order.css";

export default function Order({ product }) {
  const history = useHistory();
  const handleProduct = (name) => {
    history.push(`/productss/${name}`);
  };
  return (
    <div className="container mt-5">
      <div className="aline-items">
        <img style={{ height: "200px" }} src={product.imageURL} alt="" />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button
          onClick={() => handleProduct(product.name)}
          className="btn btn-success"
          type=""
        >
          Bye Now
        </button>
      </div>
    </div>
  );
}
