import * as actionTypes from "./actionTypes";

export function changeCategoiry(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
