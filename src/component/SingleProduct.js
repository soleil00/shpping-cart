import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./Context";

function SingleProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="product">
      <img src={product.image} alt="image" />
      <div className="description">
        <div
          className="detail"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </div>
        <p className="stock">{product.stock} in stock</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {cart.includes(product) ? (
            <button onClick={removeFromCart}>Remove from cart</button>
          ) : (
            <button onClick={addToCart}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
