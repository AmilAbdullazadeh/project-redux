import { combineReducers } from "redux";

import changeCategryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
  changeCategryReducer,
});

export default rootReducer;
