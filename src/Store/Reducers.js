// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "../modules/Auth/Reducers/Reducers";
import { AllpackagesReducer } from "../modules/Packages/Reducers/index";
const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    Allpackages: AllpackagesReducer,
  });

export default createRootReducer;
