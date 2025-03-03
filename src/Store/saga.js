// sagas/index.js
import { all } from "redux-saga/effects";
import authSagas from "../modules/Auth/Saga/Saga";
function* rootSaga() {
  yield all([
    authSagas()
  ]);
}

export default rootSaga;
