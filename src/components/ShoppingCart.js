import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <p className="Home-page-link">Product page</p>
        </Link>
        <h1>Check out</h1>
        <ol>
          {this.props.cart.map(products => (
            <li key={products.id}> {products.name} </li>
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(ShoppingCart);
