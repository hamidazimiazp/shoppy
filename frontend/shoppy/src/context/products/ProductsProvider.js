import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/config";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProducts(await api.get("/shop/products/"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// get product custom hook
export const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

// get product details
export const useProductDetails = (id) => {
  const response = useProducts();
  const result = response.find((item) => item.id === id);
  return result;
};

export default ProductsProvider;
