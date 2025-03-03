// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "../modules/Auth/Reducers/Reducers";
const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
  });

export default createRootReducer;
