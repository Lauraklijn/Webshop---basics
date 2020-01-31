export function addCart(data) {
  return {
    type: "ADD_TO_CART",
    payload: data
  };
}

export function addProductToCart(productId) {
  return function thunk(dispatch, getState) {
    dispatch(addCart(productId));
  };
}
