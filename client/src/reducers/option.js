import {ADD_OPTION, DELETE_OPTION, GET_OPTION, SET_OPTIONS} from '../actions/types';

const initialState = {
  options: null,
  option: null,
};

const option = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return {
        ...state,
        options: action.options,
      }
    case GET_OPTION:
      return {
        ...state,
        option: action.option,
        options: action.options,
      }
    default:
      return state;
  }
}

export default option;