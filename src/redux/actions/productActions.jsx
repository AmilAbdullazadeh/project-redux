import * as actionsTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionsTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getProductsSuccess(data)));
  };
}
