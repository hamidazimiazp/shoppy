import React, { memo } from "react";
import styles from "./ProductsWrapper.module.css";
import Card from "../ProductCards/Card";
import Loader from "../Loader/Loader";

const Poducts = ({ filtredProducts }) => {
  return (
    <div className={styles.products}>
      {!filtredProducts.length ? (
        <Loader />
      ) : (
        filtredProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))
      )}
    </div>
  );
};

export default memo(Poducts);
