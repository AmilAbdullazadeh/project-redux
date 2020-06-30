import * as actionsTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionsTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionsTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionsTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export async function handleResponse(res) {
  if (res.ok) res.json();

  const err = await res.text();
  throw new Error(err);
}

export function handleError(err) {
  console.error("Something is wrong !");
  throw err;
}

export function saveProductAPI(product) {
  let url = "http://localhost:3000/products/";
  return fetch(url + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "appilication/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .then(handleError);
}

export function savePorduct(product) {
  return function (dispatch) {
    return saveProductAPI(product)
      .then((savedPorduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedPorduct))
          : dispatch(createProductSuccess(savedPorduct));
      })
      .catch((err) => {
        throw err;
      });
  };
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
