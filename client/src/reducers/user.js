import {LOGIN_WITH_TOKEN, LOGIN, LOGOUT, SIGNUP} from '../actions/types';

const initialState = {
  user: null,
  token: null
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case LOGIN_WITH_TOKEN:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case SIGNUP:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      }
    default: 
      return state;
  }
};

export default user;
