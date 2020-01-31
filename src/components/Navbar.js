import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    if (!this.props.cart) {
      return "Loading";
    }

    return (
      <div>
        <Link to="/shoppingcart">
          <p className="winkelwagen">Cart:({this.props.cart.length})</p>
        </Link>

        <h1>Webshop from Laura</h1>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Navbar);
