import React from "react";
import { useCart } from "../../context/cart/CartProvider";
import BasketCard from "../../components/BasketCard/BasketCard";
import styles from "./CheckoutPage.module.css";
import { IoMdPricetag } from "react-icons/io";
import { TbHash, TbClock, TbDiscountCheckFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import BackArrow from "../../components/BackArrow/BackArrow";
const CheckoutPage = () => {
  const [state, dispatch] = useCart();

  const { totalPrice, itemsCounter, checkout } = state;

  return (
    <>
      <BackArrow />
      <div className={styles.container}>
        <div className={styles.left}>
          {!checkout ? (
            itemsCounter > 0 ? (
              <>
                <div className={styles.top}>
                  <p>
                    <IoMdPricetag color="#fe5d42" />
                    <span className={styles.title}>Total : </span>
                    <span className={styles.data}>${totalPrice}</span>
                  </p>
                  <p>
                    <TbHash color="blue" />
                    <span className={styles.title}>Count : </span>
                    <span className={styles.data}>{itemsCounter}</span>
                  </p>
                  <p>
                    <TbClock color="green" />
                    <span className={styles.title}>Status : </span>
                    <span className={styles.data}>Pending...</span>
                  </p>
                </div>
                <div className={styles.bottom}>
                  <button onClick={() => dispatch({ type: "CHECHOUT" })}>
                    Checkout
                  </button>
                </div>{" "}
              </>
            ) : (
              <>
                <p>Cart Is Empty. </p>
                <p>
                  Let's{" "}
                  <Link to={"/products"} style={{ color: "#fe5d42" }}>
                    Buy
                  </Link>{" "}
                  Somthing.
                </p>
              </>
            )
          ) : (
            <p className={styles.topp}>
              <TbDiscountCheckFilled color="green" />
              <span className={styles.title}>Status : </span>
              <span className={styles.data} style={{ fontSize: 12 }}>
                {" "}
                Cashout Successfully :)
              </span>
            </p>
          )}
        </div>
        <div className={styles.right}>
          {state.selectedItems.map((product) => (
            <BasketCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
