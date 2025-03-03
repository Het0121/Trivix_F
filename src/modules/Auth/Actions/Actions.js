import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  RESTORE_SESSION,
} from "../Types/Types";

export const loginRequest = (finaldata) => ({
  type: LOGIN_REQUEST,
  payload: finaldata,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

export const SignupRequest = (finaldata) => ({
  type: SIGNUP_REQUEST,
  payload: finaldata,
});

export const SignupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload: payload,
});

export const SignupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error,
});

export const restoreSession = () => ({
  type: RESTORE_SESSION,
});

export const logout = () => ({
  type: LOGOUT,
});
