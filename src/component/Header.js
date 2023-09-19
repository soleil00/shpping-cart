import React, { useContext } from "react";
import "./header.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <nav>
        <h1>
          <Typewriter
            cursorStyle="|"
            cursor
            words={["soleil", "rukundo"]}
            loop
          />
        </h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart({cart.length})</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
