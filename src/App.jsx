import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Products } from "./components/Products/Products";
import { ProductDetails } from "./components/Products/ProductDetails";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { SearchedProduct } from "./components/SearchedProduct/SearchedProduct";
import { useState } from "react";
import { ProductsData } from "./ProductsData";

function App() {
  const [data, setData] = useState([...ProductsData]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                cart={cart}
                setCart={setCart}
                items={data}
                setData={setData}
              />
            }
          />
          <Route
            path="/productdetails/:productName"
            element={
              <ProductDetails data={data} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchedProduct cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
