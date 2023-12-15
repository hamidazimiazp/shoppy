import React from "react";
import styles from "./BasketCard.module.css";
import {
  isInCart,
  quantityCounts,
  textShortener,
} from "../../utils/tools/tools";
import { useCart } from "../../context/cart/CartProvider";
import {
  TbCircleMinus,
  TbCirclePlus,
  TbShoppingBagCheck,
  TbTrash,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { baseURL } from "../../services/config";

const BasketCard = ({ data }) => {
  const [state, dispatch] = useCart();

  const { id } = data;

  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`}>
        <img src={baseURL + data.image} alt={data.title} />
      </Link>
      <p>{textShortener(data.title, 3)}</p>
      <div className={styles.actions}>
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
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
              >
                <TbTrash />
              </button>
            )}

            <span className={styles.badge}>
              {quantityCounts(state, id) && quantityCounts(state, id)}
            </span>

            <button
              onClick={() => dispatch({ type: "INCREASE_ITEM", payload: data })}
            >
              <TbCirclePlus />
            </button>
          </>
        ) : (
          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}>
            <TbShoppingBagCheck />
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketCard;
