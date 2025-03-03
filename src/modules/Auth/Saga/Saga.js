import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGOUT,
  RESTORE_SESSION,
  SIGNUP_REQUEST,
} from "../Types/Types";
import {
  loginSuccess,
  loginFailure,
  SignupSuccess,
  SignupFailure,
} from "../Actions/Actions";
import { login, Signup } from "../Api/index";
import Cookies from "js-cookie";

function* handleLogin(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response.data));
    localStorage.setItem("user", response.data.accessToken);
    Cookies.set("user", response.data.accessToken);
    if (response.data.accessToken) {
      window.location.href = "/";
    }
  } catch (error) {
    console.log("error".error.message);
    yield put(loginFailure(error.message));
  }
}
function* handleSignup(action) {
  try {
    const response = yield call(Signup, action.payload);
    yield put(SignupSuccess(response.data.user));
    localStorage.setItem("user", response.data.user.token);
    localStorage.setItem("Email", response.data.user.userEmail);
    Cookies.set("user", response.data.user.token);
    if (response.data.user.token) {
      window.location.href = "/";
    }
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
function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
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
  ]);
}
