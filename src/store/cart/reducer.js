const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("ik ben nu in ADD_TO_CART");

      const productToAdd = action.payload;
      const isInCart = state.some(
        product => product.productId === productToAdd
      );
      if (!isInCart) {
        return [...state, { productId: productToAdd, quantity: 1 }];
      } else {
        const updatedArray = state.map(product =>
          product.productId === productToAdd
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return updatedArray;
      }
    }

    default: {
      return state;
    }
  }
}
