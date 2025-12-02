import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <Header />
      <Product />
      <Cart />
    </div>
  );
}

export default App;

