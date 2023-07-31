import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Base title="WeTrainSmart" description="Welcome to wetrainsmart store">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="YouTube Channel "
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        ></iframe>
      </div>
      <hr />
      <h1>Products</h1>
      <div className="column">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-7 mb-4 mx-auto">
              <Card product={product} />
              <hr />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
