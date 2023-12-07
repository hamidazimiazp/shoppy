import React, { useEffect, useState, memo, useRef } from "react";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./ProductsPage.module.css";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../../utils/tools/tools";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import SideBar from "../../components/SideBar/SideBar";

const ProductsPage = () => {
  const products = useProducts();
  const containerRef = useRef();
  const [search, setSearch] = useState("");
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  useEffect(() => {
    setFiltredProducts(products);
    getInitialQuery(searchParams, setQuery, setSearch);
  }, [products, searchParams]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setFiltredProducts(finalProducts);
  }, [products, query, setSearchParams]);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container} ref={containerRef}>
        <ProductsWrapper filtredProducts={filtredProducts} />
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default memo(ProductsPage);
