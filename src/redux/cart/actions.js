import CartActionTypes from "./action-type";

export const addProductToCart = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const removeProductsFromCart = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  };
};

export const addQuantityProducts = (payload) => {
  return {
    type: CartActionTypes.ADD_QUANTITY,
    payload,
  };
};

export const removeQuantityProducts = (payload) => {
  return {
    type: CartActionTypes.REMOVE_QUANTITY,
    payload,
  };
};
