import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  RESTORE_SESSION,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  TRAVELER_LOGIN_FAILURE,
  TRAVELER_LOGIN_SUCCESS,
  TRAVELER_SIGNUP_FAILURE,
  TRAVELER_SIGNUP_SUCCESS,
} from "../Types/Types";

const initialState = {
  Data: [],
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case TRAVELER_LOGIN_SUCCESS:
    case TRAVELER_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        Data: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case TRAVELER_LOGIN_FAILURE:
    case TRAVELER_SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case RESTORE_SESSION:
      return { ...state };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
