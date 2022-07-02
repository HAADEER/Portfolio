import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import {shopReducer} from "../../redux/features/productSlice" ;

const ItemProduct = () => {
  const paramID = useParams();
  //console.log(paramID.id);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${paramID.id}`)
      .then((res) => res.json())
      .then((json) => setItemProduct(json));
  });
  const [itemProduct, setItemProduct] = useState({});

  return (
    <div>
      {Object.keys(itemProduct).length !== 0 ? 
        <div className="container mt-5">
          <div className="row">
            <div className="col-4">
          <img
            src={itemProduct.image}
            className="card-img-top d-flex justify-content-center m-auto"
            style={{ width: "13rem" }}
            alt="prod"
          />
          </div>
          <div className="card-body col-6">
            <h3>{itemProduct.title}</h3>
            <p className="card-text">{itemProduct.description}</p>
            <h4 className="text-secondary">{itemProduct.price}$</h4>
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
