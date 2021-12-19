import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Counter from "../components/Counter";
import CounterButtons from "../components/CounterButtons";

const Home = () => {
  return (
    <div className="container">
      <Counter />
      <CategoryMenu />
      <CounterButtons />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
