import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import Product from "../Product";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [productPerPage, setUserPerPage] = useState(8);
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * productPerPage;
  const pageCount = products.length / productPerPage;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        <Product
          searchTerm={search}
          pagesVisited={pagesVisited}
          productPerPage={productPerPage}
        />
      </div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default ProductListing;
