import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import products from "./data/products";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <h2>Welcome to my store</h2>
        <p>Find your next favorite piece</p>

        <ProductGrid products={products} />
      </main>
    </div>
  );
}

export default App;