import {LOGIN, LOGIN_WITH_TOKEN, LOGOUT, SIGNUP} from './types';
import axios from 'axios';

import {setCookie, getCookie, deleteCookie} from '../functions/cookies';

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      token: null,
    })
  }
}

export const login = userData => {
  return async dispatch => {
    const results = await axios.post('/api/users/login', userData);
    setCookie('token', results.data.token, 2);
    dispatch({
      type: LOGIN,
      token: results.data.token,
      user: results.data.user,
    });
  }
}

export const signup = userData => {
  return async dispatch => {

    dispatch({
      type: SIGNUP,
      // token: null,
    })
  }
}

export const loginWithToken = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_WITH_TOKEN,
      // token: null,
    })
  }
}