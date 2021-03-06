// import {ADD_OPTION, DELETE_OPTION, GET_OPTION, SET_OPTIONS} from './types';
import {GET_OPTION, SET_OPTIONS} from './types';
import axios from 'axios';

export const setOptions = optionList => {
  return async dispatch => {
    dispatch({
      type: SET_OPTIONS,
      options: optionList
    })
  }
}

export const getOption = optionId => {
  return async dispatch => {
    const results = await axios.get(`/api/options/${optionId}`);
    dispatch({
      type: GET_OPTION,
      option: results.data.option,
      options: results.data.option.optionList
    })
  }
}
