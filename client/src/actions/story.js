import {GET_STORY, START_STORY, ADD_STARTING_STORY_OPTION} from './types';
import axios from 'axios';

export const getStory = () => {
  return dispatch => {
    // const results = await axios.post(`/api/stories/${user}`, userData);

    dispatch({type: GET_STORY})
  }
}

export const startStory = () => {
  return dispatch => {
    dispatch({type: START_STORY})
  }
}

export const addStartingStoryOption = () => {
  return dispatch => {
    dispatch({type: ADD_STARTING_STORY_OPTION})
  }
}