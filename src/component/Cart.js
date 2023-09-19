import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "./Context";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <p>{cart?.length}</p>
      <p>
        total price: ${cart?.reduce((acc, curr) => acc + Number(curr.price), 0)}{" "}
        {/* Close the reduce function properly */}
      </p>
      <div className="container">
        {cart?.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
