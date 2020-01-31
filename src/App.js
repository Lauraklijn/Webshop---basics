import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/" component={ProductPage} />
        </Switch>
      </div>
    );
  }
}
