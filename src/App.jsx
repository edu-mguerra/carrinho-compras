import React from "react";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Provide } from "./context/Provide";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <Provide>
      <Header />
      <Products />
      <Cart />
    </Provide>

    
  );
}

export default App;