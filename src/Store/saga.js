// sagas/index.js
import { all } from "redux-saga/effects";
import authSagas from "../modules/Auth/Saga/Saga";
import packages from "../modules/Packages/Saga";
function* rootSaga() {
  yield all([authSagas(), packages()]);
}

export default rootSaga;
