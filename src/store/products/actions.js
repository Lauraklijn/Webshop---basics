export function productsFetched(data) {
  return {
    type: "products/FETCHED",
    payload: data
  };
}

export function fetchProducts() {
  return function thunk(dispatch, getState) {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(productsFetched(data));
      });
  };
}
