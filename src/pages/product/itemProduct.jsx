import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemProduct = () => {
  const paramID = useParams();
  console.log(paramID.id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${paramID.id}`)
      .then((res) => res.json())
      .then((json) => setItemProduct(json));
  });
  const [itemProduct, setItemProduct] = useState({});
  console.log(itemProduct);
  return (
    <div>
      {Object.keys(itemProduct).length !== 0 ? 
        <div className="container d-flex justify-content-center w-25">
          <div className="row">
          <img
            src={itemProduct.image}
            className="card-img-top"
            style={{ width: "18rem" }}
            alt="prod"
          />
          <div className="card-body">
            <h3>{itemProduct.title}</h3>
            <p className="card-text">{itemProduct.description}</p>
            <h4 className="text-info">{itemProduct.price}$</h4>
          </div>
          </div>
        </div>
       : 
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </div>
  );
};

export default ItemProduct;
