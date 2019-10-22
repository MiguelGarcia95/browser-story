import {LOGIN, LOGIN_WITH_TOKEN, LOGOUT, SIGNUP} from './types';
import axios from 'axios';

import {setCookie, getCookie, deleteCookie} from '../functions/cookies';

export const logout = () => {
  return dispatch => {
    deleteCookie('token');
    dispatch({type: LOGOUT})
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
    const results = await axios.post('/api/users/', userData);
    setCookie('token', results.data.token, 2);
    dispatch({
      type: SIGNUP,
      token: results.data.token,
      user: results.data.user,
    })
  }
}

export const loginWithToken = () => {
  return async dispatch => {
    const token = getCookie('token');
    const results = await axios.post('/api/users/loginWithToken', null, {
      headers: {'Authorization': "bearer " + token},
    });

    dispatch({
      type: LOGIN_WITH_TOKEN,
      user: results.data.user,
      token: token
    })
  }
}