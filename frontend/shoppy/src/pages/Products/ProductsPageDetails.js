import React, { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../../context/products/ProductsProvider";
import Loader from "../../components/Loader/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProductsPageDetails.module.css";
import BackArrow from "../../components/BackArrow/BackArrow";

const ProductsPageDetails = () => {
  const { id } = useParams();

  const product = useProductDetails(+id);

  if (!product) return <Loader />;

  return (
    <>
      <BackArrow />
      <div className={styles.container}>
        <img src={product.image} alt={product.title} />
        <div className={styles.information}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}>
            <SiOpenproject />
            <span>{product.category}</span>
          </p>
          <div>
            <span className={styles.price}>
              <IoMdPricetag />
              <span>${product.price}</span>
            </span>
            <Link to={"/products"}>
              <FaArrowLeft />
              <span>Back to shop</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPageDetails);
