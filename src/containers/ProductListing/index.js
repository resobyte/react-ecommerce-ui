import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import Product from "../Product";
import ReactPaginate from 'react-paginate'

const ProductListing = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <form className="nosubmit">
        <input
          className="nosubmit"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <div className="ui grid container">
        <Product searchTerm={search}/>
      </div>
    </>
  );
};

export default ProductListing;
