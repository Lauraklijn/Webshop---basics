import React, { Component } from "react";
import { fetchProducts } from "../store/products/actions";
import { addProductToCart } from "../store/cart/actions";
import Products from "./Products";
import { connect } from "react-redux";

class ProductPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleclickAddCart(product) {
    this.props.dispatch(addProductToCart(product));
  }

  render() {
    console.log("products", this.props.products.products);
    const loading = !this.props.products;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2>Products</h2>
            {this.props.products.products.map((product, id) => (
              <div key={id}>
                <Products products={product} />
                <button onClick={() => this.handleclickAddCart(product)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products
  };
}

export default connect(mapStateToProps)(ProductPage);
