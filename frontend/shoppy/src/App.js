import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// pages
import ProductsPage from "./pages/Products/ProductsPage";
import ProductsPageDetails from "./pages/Products/ProductsPageDetails";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ProductsProvider from "./context/products/ProductsProvider";
import CartProvider from "./context/cart/CartProvider";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      {/* cart context */}
      <CartProvider>
        {/* products context */}
        <ProductsProvider>
          {/* layout */}
          <Layout>
            {/* routes */}
            <Routes>
              <Route
                index
                path="/"
                element={<Navigate to="/products" replace />}
              />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductsPageDetails />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  );
};

export default App;
