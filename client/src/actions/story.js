import {GET_STORY, START_STORY, ADD_STARTING_STORY_OPTION, GET_STORIES, GET_STORY_TRACKER} from './types';
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

export const getStoryTracker = data => {
  return async dispatch => {
    const results = await axios.post('/api/stories/getStoryTracker', data);
    dispatch({
      type: GET_STORY_TRACKER,
      storyTracker: results.data.storyTracker
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

export const getStory = storyId => {
  return async dispatch => {
    const results = await axios.get(`/api/stories/${storyId}`);
    dispatch({
      type: GET_STORY,
      story: results.data.story
    })
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