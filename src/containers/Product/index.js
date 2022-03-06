import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = ({searchTerm}) => {
 
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.filter((val) => {
    if (val == "") {
      return val;
    }
    else {
      return val.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    }
  }).map((product) => {
    const { id, title } = product;
    const { price, category } = product.variants[0];
    const { src } = product.image;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={src} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <> {renderList}</>;
};

export default ProductComponent;
