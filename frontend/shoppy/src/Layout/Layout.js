import React from "react";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import styles from "./Layout.module.css";
import { useCart } from "../context/cart/CartProvider";

const Layout = ({ children }) => {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/products">Shoppy</Link>
        </h1>
        <Link to="/checkout">
          <TbShoppingCart color="#fe5d42" size={25} />
          <span className={styles.badge}>{state.itemsCounter}</span>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Copy Right &copy;2023 - <Link to="/">Shoppy</Link>
        </p>
      </footer>
    </>
  );
};

export default Layout;
