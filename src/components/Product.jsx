import React from 'react';
import DATA from '../Data';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card my-3 py-4" key={item.id} style={{ width: '18rem' }}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">$ {item.price}</p>
          <Link to={`/Product/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
