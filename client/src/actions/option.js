import {ADD_OPTION, DELETE_OPTION, GET_OPTION, SET_OPTIONS} from './types';
import axios from 'axios';

export const setOptions = story => {
  return async dispatch => {
    // const results = await axios.post(`/api/stories/getStories`, {user: userId});
    console.log(story);
    dispatch({
      type: SET_OPTIONS,
      options: story
    })
  }
}

export const getOption = optionId => {
  return async dispatch => {
    const results = await axios.post(`/api/options/${optionId}`);
    dispatch({
      type: GET_OPTION,
      option: results.data.option,
      // options: 
    })
  }
}
