import * as actionsTypes from "../actions//actionTypes";
import initialState from "./initialState";

export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionsTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionsTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
