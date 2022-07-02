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
      <h1 className="text-center mb-5 text-secondary">Products</h1>

      {pendding ? (
        <div className="container d-flex justify-content-center">
          <div className="row">
          {products.map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                className="col-4 text-black text-decoration-none py-3 my-2 border"
                key={item.id}
              >
                <img
                  src={item.image}
                  className="card-img-top d-flex justify-content-center m-auto"
                  style={{ width: "10rem" }}
                  alt="prod"
                />
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <h4 className="text-secondary text-center mt-3">{item.price}$</h4>
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
