import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGOUT,
  RESTORE_SESSION,
  SIGNUP_REQUEST,
  TRAVELER_LOGIN_REQUEST,
  TRAVELER_SIGNUP_REQUEST,
} from "../Types/Types";
import {
  loginSuccess,
  loginFailure,
  SignupSuccess,
  SignupFailure,
} from "../Actions/Actions";
import { login, Signup, travelerlogin, TravelerSignup } from "../Api/index";
import Cookies from "js-cookie";

function* handleLogin(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response.data));
    localStorage.setItem("user", response.data.accessToken);
    Cookies.set("user", response.data.accessToken);
  } catch (error) {
    console.log("error".error.message);
    yield put(loginFailure(error.message));
  }
}
function* handleTravelerLogin(action) {
  try {
    const response = yield call(travelerlogin, action.payload);
    yield put(loginSuccess(response.data));
    localStorage.setItem("user", response.data.accessToken);
    Cookies.set("user", response.data.accessToken);
  } catch (error) {
    console.log("error".error.message);
    yield put(loginFailure(error.message));
  }
}
function* handleSignup(action) {
  try {
    const response = yield call(Signup, action.payload);
    yield put(SignupSuccess(response.data));
    localStorage.setItem("user", response.data.accessToken);
    Cookies.set("user", response.data.accessToken);
  } catch (error) {
    console.log("error".error.message);
    yield put(SignupFailure(error.message));
  }
}
function* handleTravelerSignup(action) {
  try {
    const response = yield call(TravelerSignup, action.payload);
    yield put(SignupSuccess(response.data));
    localStorage.setItem("user", response.data.accessToken);
    Cookies.set("user", response.data.accessToken);
  } catch (error) {
    console.log("error".error.message);
    yield put(SignupFailure(error.message));
  }
}

function* handleRestoreSession() {
  try {
  } catch (error) {
    console.error("Session restore error:", error);
    yield put(loginFailure(error.message));
  }
}
// eslint-disable-next-line require-yield
function* logout() {
  try {
    Cookies.remove("user");
  } catch (error) {
    console.log(error);
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
function* watchTravelerLogin() {
  yield takeLatest(TRAVELER_LOGIN_REQUEST, handleTravelerLogin);
}
function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
}
function* watchTravelerSignup() {
  yield takeLatest(TRAVELER_SIGNUP_REQUEST, handleTravelerSignup);
}
function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}

function* watchRestoreSession() {
  yield takeLatest(RESTORE_SESSION, handleRestoreSession);
}

export default function* authSagas() {
  yield all([
    fork(watchLogin),
    fork(watchSignup),
    fork(watchRestoreSession),
    fork(watchLogout),
    fork(watchTravelerLogin),
    fork(watchTravelerSignup),
  ]);
}
