import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {fetchProducts} from '../../redux/features/productSlice'
const Products = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector(state => state.products.products);
  const pendding = useSelector(state => state.products.pendding);

  return (
    <div>
      <h1 className="text-center mb-5">Shops</h1>

      {pendding ? (
        <div className="container d-flex justify-content-center">
          <div className="row">
          {products.map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                className="col-3 text-black text-decoration-none border my-3"
                key={item.id}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  style={{ width: "18rem" }}
                  alt="prod"
                />
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p className="card-text">{item.description}</p>
                  <h5>{item.price}$</h5>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
