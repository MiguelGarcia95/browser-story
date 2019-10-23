import {GET_STORY, START_STORY, ADD_STARTING_STORY_OPTION, GET_STORIES} from './types';
import axios from 'axios';

export const getStories = userId => {
  return async dispatch => {
    console.log('ran')
    const results = await axios.post(`/api/stories/getStories`, {user: userId});
    dispatch({
      type: GET_STORIES,
      stories: results.data.stories
    })
  }
}

export const getAllStories = () => {
  return async dispatch => {
    console.log('ran')
    const results = await axios.get(`/api/stories/getStories/all`);
    dispatch({
      type: GET_STORIES,
      stories: results.data.stories
    })
  }
}




export const getStory = () => {
  return async dispatch => {
    // const results = await axios.post(`/api/stories/${user}`, userData);
    dispatch({type: GET_STORY})
  }
}

export const startStory = () => {
  return async dispatch => {
    dispatch({type: START_STORY})
  }
}

export const addStartingStoryOption = () => {
  return async dispatch => {
    dispatch({type: ADD_STARTING_STORY_OPTION})
  }
}