import React, { useEffect, useState } from "react";
import Order from "../Order/Order";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-ridge-86002.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Order key={product.name} product={product}>
          {" "}
        </Order>
      ))}
    </div>
  );
};

export default Home;
