import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingIndicator from "../LoadingIndicator";

const ProductComponent = ({ searchTerm, pagesVisited, productPerPage }) => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products
    .filter((val) => {
      if (val == "") {
        return val;
      } else {
        return val.title
          .toLowerCase()
          .includes(searchTerm && searchTerm.toLowerCase());
      }
    })
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((product) => {
      const { id, title } = product;
      const { price, category } = product.variants[0];
      const { src } = product.image;
      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={src} alt={title} loading="lazy"/>
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

  return (
    <>
      {" "}
      {Object.keys(products).length === 0 ? <LoadingIndicator /> : renderList}
    </>
  );
};

export default ProductComponent;
