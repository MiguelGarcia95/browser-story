import {ADD_OPTION, DELETE_OPTION, GET_OPTION, SET_OPTIONS} from '../actions/types';

const initialState = {
  options: [],
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
        option: action.option
      }
    default:
      return state;
  }
}

export default option;