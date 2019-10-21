import {LOGIN, LOGIN_WITH_TOKEN, LOGOUT, SIGNUP} from './types';

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      token: null,
    })
  }
}

export const login = () => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      // token: null,
    })
  }
}

export const signup = () => {
  return dispatch => {
    dispatch({
      type: SIGNUP,
      // token: null,
    })
  }
}