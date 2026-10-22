import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, image }) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart({
      name,
      price,
      image,
    });
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>${price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;