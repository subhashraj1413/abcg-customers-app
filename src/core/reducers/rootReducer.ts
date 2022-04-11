import { combineReducers } from "redux";
import customersReducer from "./customersReducer";

const rootReducer = combineReducers({
  root: customersReducer,
});

export default rootReducer;
