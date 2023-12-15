import React, { createContext, useContext, useReducer } from "react";
import { sumItems } from "../../utils/tools/tools";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "INCREASE_ITEM":
      if (state.selectedItems.find((item) => item.id === action.payload.id)) {
        let itemIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        let item = state.selectedItems[itemIndex];

        if (item.count > item.quantity) {
          item.quantity++;
        }

        return {
          ...state,
          ...sumItems(state.selectedItems),
          checkout: false,
        };
      }
      return state;
    case "DECREASE_ITEM":
      if (state.selectedItems.find((item) => item.id === action.payload.id)) {
        let itemIndex = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );

        let item = state.selectedItems[itemIndex];
        item.quantity--;

        return {
          ...state,
          ...sumItems(state.selectedItems),
          checkout: false,
        };
      }
      return state;
    case "REMOVE_ITEM":
      if (state.selectedItems.find((item) => item.id === action.payload.id)) {
        let newSelected = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          selectedItems: newSelected,
          ...sumItems(newSelected),
          checkout: false,
        };
      }
      return state;
    case "CHECHOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
