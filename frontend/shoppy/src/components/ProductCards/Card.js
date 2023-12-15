import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  TbListDetails,
  TbShoppingBagCheck,
  TbTrash,
  TbCirclePlus,
  TbCircleMinus,
} from "react-icons/tb";
import {
  isInCart,
  quantityCounts,
  textShortener,
} from "../../utils/tools/tools";
import styles from "./cards.module.css";
import { useCart } from "../../context/cart/CartProvider";
import { baseURL } from "../../services/config";

const Card = ({ data }) => {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  return (
    <div className={styles.card}>
      <img src={baseURL + image} alt="title" />
      <h3>{textShortener(title, 3)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/product/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {isInCart(state, id) ? (
            <>
              {quantityCounts(state, id) > 1 ? (
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_ITEM", payload: data })
                  }
                >
                  <TbCircleMinus />
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }
                >
                  <TbTrash />
                </button>
              )}

              <span className={styles.badge}>
                {quantityCounts(state, id) && quantityCounts(state, id)}
              </span>

              <button
                onClick={() =>
                  dispatch({ type: "INCREASE_ITEM", payload: data })
                }
              >
                <TbCirclePlus />
              </button>
            </>
          ) : (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}
            >
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
