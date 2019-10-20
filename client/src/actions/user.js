import {LOGIN, LOGIN_WITH_TOKEN, LOGOUT, SIGNUP} from './types';

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      token: null,
    })
  }
}