import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  
  const {  title, price, category, body_html } = product;
  

  console.log(product.body_html);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image.src} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2 className="ui teal tag label">${ product.variants[0].price}</h2>
                <h3 className="ui brown block header">{category}</h3>
                <p dangerouslySetInnerHTML={{__html: product.body_html}}></p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
