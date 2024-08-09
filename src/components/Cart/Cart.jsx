import React from "react";
import "./Cart.css";
import { CartCard } from "./CartCard";
import { Link } from "react-router-dom";

export const Cart = ({ cart, setCart }) => {
  return (
    <>
      <section className="cart-section">
        {cart.length == 0 ? (
          <div className="empty-cart">
            <h1>Your cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((data) => {
            return (
              <>
                <CartCard
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  discount={data.discount}
                  mrp={data.mrp}
                  rating={data.rating}
                  brand={data.brand}
                  image={data.image}
                />
              </>
            );
          })
        )}
        {cart.length !== 0 ? (
          <>
            <div className="clear-cart-btn">
              <button onClick={() => setCart([])}>Clear Cart</button>
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
