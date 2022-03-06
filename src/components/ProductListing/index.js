import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import Product from "../Product";

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
