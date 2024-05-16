// actions.js
export const addToCart = () => ({
  type: "ADD_TO_CART",
});

export const removeFromCart = () => ({
  type: "REMOVE_FROM_CART",
});
export const addProductToCart = (product) => ({
  type: "PRODUCT_TO_CART",
  payload: product,
});
export const removeProduct = (product) => ({
  type: "REMOVE_PRODUCT",
  payload: product,
});
