import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>My Clothing Store</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/cart">Cart ({cart.length})</a>
      </div>
    </nav>
  );
}

export default Navbar;